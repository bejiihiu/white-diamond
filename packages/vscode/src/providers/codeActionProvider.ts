import * as vscode from 'vscode';
import { WHITE_DIAMOND_CONSTANTS } from '../utils/constants';

export class CodeActionProvider implements vscode.CodeActionProvider {
    provideCodeActions(
        document: vscode.TextDocument,
        range: vscode.Range | vscode.Selection,
        context: vscode.CodeActionContext,
        token: vscode.CancellationToken
    ): vscode.CodeAction[] {
        const actions: vscode.CodeAction[] = [];
        
        for (const diagnostic of context.diagnostics) {
            if (diagnostic.message.includes('Border radius')) {
                const fix = this.createBorderRadiusFix(document, diagnostic.range);
                if (fix) {
                    actions.push(fix);
                }
            }
            
            if (diagnostic.message.includes('Missing border')) {
                const fix = this.createAddBorderFix(document, diagnostic.range);
                if (fix) {
                    actions.push(fix);
                }
            }
            
            if (diagnostic.message.includes('Opacity transitions') || 
                diagnostic.message.includes('Fade animations')) {
                const fix = this.createReplaceFadeFix(document, diagnostic.range);
                if (fix) {
                    actions.push(fix);
                }
            }
        }
        
        return actions;
    }
    
    private createBorderRadiusFix(
        document: vscode.TextDocument,
        range: vscode.Range
    ): vscode.CodeAction | null {
        const line = document.lineAt(range.start.line);
        const text = line.text;
        
        const match = text.match(/(border-radius\s*:\s*)[^;]+/);
        if (!match) {
            return null;
        }
        
        const edit = new vscode.WorkspaceEdit();
        const fullRange = new vscode.Range(
            new vscode.Position(range.start.line, match.index!),
            new vscode.Position(range.start.line, match.index! + match[0].length)
        );
        edit.replace(document.uri, fullRange, 'border-radius: 0px');
        
        const action = new vscode.CodeAction(
            'Remove border-radius',
            vscode.CodeActionKind.QuickFix
        );
        action.edit = edit;
        action.diagnostics = [document.diagnostics.find(d => d.range.isEqual(range))!];
        action.isPreferred = true;
        
        return action;
    }
    
    private createAddBorderFix(
        document: vscode.TextDocument,
        range: vscode.Range
    ): vscode.CodeAction | null {
        const line = document.lineAt(range.start.line);
        const text = line.text;
        
        const insertPosition = new vscode.Position(
            range.start.line,
            text.length
        );
        
        const edit = new vscode.WorkspaceEdit();
        edit.insert(
            document.uri,
            insertPosition,
            `\n    border: ${WHITE_DIAMOND_CONSTANTS.DEFAULT_BORDER};`
        );
        
        const action = new vscode.CodeAction(
            'Add border',
            vscode.CodeActionKind.QuickFix
        );
        action.edit = edit;
        action.diagnostics = [document.diagnostics.find(d => d.range.isEqual(range))!];
        
        return action;
    }
    
    private createReplaceFadeFix(
        document: vscode.TextDocument,
        range: vscode.Range
    ): vscode.CodeAction | null {
        const line = document.lineAt(range.start.line);
        const text = line.text;
        
        const edit = new vscode.WorkspaceEdit();
        edit.replace(
            document.uri,
            range,
            'animation: viewportEntry 200ms cubic-bezier(0, 0, 0.2, 1)'
        );
        
        const action = new vscode.CodeAction(
            'Replace fade with viewport entry',
            vscode.CodeActionKind.QuickFix
        );
        action.edit = edit;
        action.diagnostics = [document.diagnostics.find(d => d.range.isEqual(range))!];
        
        return action;
    }
}