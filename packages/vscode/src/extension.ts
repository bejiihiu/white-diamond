import * as vscode from 'vscode';
import { BorderChecker } from './diagnostics/borderChecker';
import { GeometryChecker } from './diagnostics/geometryChecker';
import { AnimationChecker } from './diagnostics/animationChecker';
import { HierarchyChecker } from './diagnostics/hierarchyChecker';
import { CodeActionProvider } from './providers/codeActionProvider';
import { WHITE_DIAMOND_CONSTANTS } from './utils/constants';

export function activate(context: vscode.ExtensionContext) {
    const diagnosticCollection = vscode.languages.createDiagnosticCollection('white-diamond');
    
    const borderChecker = new BorderChecker();
    const geometryChecker = new GeometryChecker();
    const animationChecker = new AnimationChecker();
    const hierarchyChecker = new HierarchyChecker();
    
    const codeActionProvider = new CodeActionProvider();
    
    function validateDocument(document: vscode.TextDocument) {
        if (document.languageId !== 'css' && 
            document.languageId !== 'scss' && 
            document.languageId !== 'less') {
            return;
        }
        
        const diagnostics: vscode.Diagnostic[] = [];
        
        diagnostics.push(...borderChecker.check(document));
        diagnostics.push(...geometryChecker.check(document));
        diagnostics.push(...animationChecker.check(document));
        diagnostics.push(...hierarchyChecker.check(document));
        
        diagnosticCollection.set(document.uri, diagnostics);
    }
    
    function validateCurrentFile() {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            validateDocument(editor.document);
        }
    }
    
    function showViolations() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor');
            return;
        }
        
        const diagnostics = diagnosticCollection.get(editor.document.uri);
        if (diagnostics.length === 0) {
            vscode.window.showInformationMessage('No violations found');
            return;
        }
        
        const message = `Found ${diagnostics.length} violation(s) in current file`;
        vscode.window.showInformationMessage(message);
    }
    
    context.subscriptions.push(
        vscode.commands.registerCommand('white-diamond.validateCurrentFile', validateCurrentFile),
        vscode.commands.registerCommand('white-diamond.showViolations', showViolations)
    );
    
    context.subscriptions.push(
        vscode.languages.registerCodeActionsProvider(
            ['css', 'scss', 'less'],
            codeActionProvider,
            {
                providedCodeActionKinds: [
                    vscode.CodeActionKind.QuickFix
                ]
            }
        )
    );
    
    context.subscriptions.push(diagnosticCollection);
    
    vscode.workspace.onDidOpenTextDocument(validateDocument);
    vscode.workspace.onDidChangeTextDocument(event => validateDocument(event.document));
    vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            validateDocument(editor.document);
        }
    });
    
    vscode.workspace.textDocuments.forEach(validateDocument);
}

export function deactivate() {}