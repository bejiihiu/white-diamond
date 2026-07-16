import * as vscode from 'vscode';
import { WHITE_DIAMOND_CONSTANTS } from '../utils/constants';

export class HierarchyChecker {
    check(document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];
        const text = document.getText();
        const lines = text.split('\n');
        
        let braceCount = 0;
        let hasBorder = false;
        let hasInnerSurface = false;
        
        lines.forEach((line, lineIndex) => {
            const openBraces = (line.match(/\{/g) || []).length;
            const closeBraces = (line.match(/\}/g) || []).length;
            
            if (openBraces > 0) {
                braceCount += openBraces;
                hasBorder = false;
                hasInnerSurface = false;
            }
            
            if (line.includes('border')) {
                hasBorder = true;
            }
            
            if (line.includes('background') || line.includes('padding')) {
                hasInnerSurface = true;
            }
            
            if (closeBraces > 0) {
                braceCount -= closeBraces;
                if (braceCount === 0) {
                    if (hasInnerSurface && !hasBorder) {
                        const range = new vscode.Range(
                            new vscode.Position(lineIndex, 0),
                            new vscode.Position(lineIndex, line.length)
                        );
                        diagnostics.push(new vscode.Diagnostic(
                            range,
                            `Missing border. Physical boundary must come before inner surface.`,
                            vscode.DiagnosticSeverity.Information
                        ));
                    }
                }
            }
        });
        
        return diagnostics;
    }
}