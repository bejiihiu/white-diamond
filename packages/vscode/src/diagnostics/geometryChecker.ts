import * as vscode from 'vscode';
import { WHITE_DIAMOND_CONSTANTS } from '../utils/constants';

export class GeometryChecker {
    check(document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];
        const text = document.getText();
        const lines = text.split('\n');
        
        lines.forEach((line, lineIndex) => {
            const shapeMatch = line.match(/shape\s*:\s*([^;]+)/);
            if (shapeMatch) {
                const value = shapeMatch[1].trim().toLowerCase();
                if (WHITE_DIAMOND_CONSTANTS.PROHIBITED_SHAPES.includes(value)) {
                    const range = new vscode.Range(
                        new vscode.Position(lineIndex, line.indexOf('shape')),
                        new vscode.Position(lineIndex, line.indexOf('shape') + 'shape'.length)
                    );
                    diagnostics.push(new vscode.Diagnostic(
                        range,
                        `Shape "${value}" is forbidden. Only rectangles are allowed in WHITE DIAMOND.`,
                        vscode.DiagnosticSeverity.Error
                    ));
                }
            }
            
            const clipPathMatch = line.match(/clip-path\s*:\s*([^;]+)/);
            if (clipPathMatch) {
                const value = clipPathMatch[1].trim().toLowerCase();
                if (value.includes('circle') || value.includes('ellipse') || value.includes('round')) {
                    const range = new vscode.Range(
                        new vscode.Position(lineIndex, line.indexOf('clip-path')),
                        new vscode.Position(lineIndex, line.indexOf('clip-path') + 'clip-path'.length)
                    );
                    diagnostics.push(new vscode.Diagnostic(
                        range,
                        `Circular clip-path is forbidden. Only rectangular shapes are allowed.`,
                        vscode.DiagnosticSeverity.Error
                    ));
                }
            }
        });
        
        return diagnostics;
    }
}