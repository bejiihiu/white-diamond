import * as vscode from 'vscode';
import { WHITE_DIAMOND_CONSTANTS } from '../utils/constants';

export class BorderChecker {
    check(document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];
        const text = document.getText();
        const lines = text.split('\n');
        
        lines.forEach((line, lineIndex) => {
            const borderRadiusMatch = line.match(/border-radius\s*:\s*([^;]+)/);
            if (borderRadiusMatch) {
                const value = borderRadiusMatch[1].trim();
                if (WHITE_DIAMOND_CONSTANTS.FORBIDDEN_BORDER_RADIUS.includes(value)) {
                    const range = new vscode.Range(
                        new vscode.Position(lineIndex, line.indexOf('border-radius')),
                        new vscode.Position(lineIndex, line.indexOf('border-radius') + 'border-radius'.length)
                    );
                    diagnostics.push(new vscode.Diagnostic(
                        range,
                        `Border radius ${value} is forbidden. Circles are not allowed in WHITE DIAMOND.`,
                        vscode.DiagnosticSeverity.Error
                    ));
                }
            }
            
            const hasBorder = WHITE_DIAMOND_CONSTANTS.REQUIRED_BORDER_PROPERTIES.some(prop => 
                line.includes(prop)
            );
            
            if (line.includes('{') && !hasBorder && !line.includes('/*') && !line.includes('//')) {
                const selectorMatch = line.match(/^([^{:]+)/);
                if (selectorMatch) {
                    const selector = selectorMatch[1].trim();
                    if (selector && !selector.startsWith('.') && !selector.startsWith('#')) {
                        const range = new vscode.Range(
                            new vscode.Position(lineIndex, 0),
                            new vscode.Position(lineIndex, line.length)
                        );
                        diagnostics.push(new vscode.Diagnostic(
                            range,
                            `Missing border. Every object must have a border in WHITE DIAMOND.`,
                            vscode.DiagnosticSeverity.Information
                        ));
                    }
                }
            }
        });
        
        return diagnostics;
    }
}