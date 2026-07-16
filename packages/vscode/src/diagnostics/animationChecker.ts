import * as vscode from 'vscode';
import { WHITE_DIAMOND_CONSTANTS } from '../utils/constants';

export class AnimationChecker {
    check(document: vscode.TextDocument): vscode.Diagnostic[] {
        const diagnostics: vscode.Diagnostic[] = [];
        const text = document.getText();
        const lines = text.split('\n');
        
        lines.forEach((line, lineIndex) => {
            const transitionMatch = line.match(/transition\s*:\s*([^;]+)/);
            if (transitionMatch) {
                const value = transitionMatch[1].trim().toLowerCase();
                if (WHITE_DIAMOND_CONSTANTS.FORBIDDEN_ANIMATIONS.some(anim => value.includes(anim))) {
                    const range = new vscode.Range(
                        new vscode.Position(lineIndex, line.indexOf('transition')),
                        new vscode.Position(lineIndex, line.indexOf('transition') + 'transition'.length)
                    );
                    diagnostics.push(new vscode.Diagnostic(
                        range,
                        `Opacity transitions are forbidden. Use viewport entry animations instead.`,
                        vscode.DiagnosticSeverity.Warning
                    ));
                }
            }
            
            const animationMatch = line.match(/animation\s*:\s*([^;]+)/);
            if (animationMatch) {
                const value = animationMatch[1].trim().toLowerCase();
                if (value.includes('fade') || value.includes('opacity')) {
                    const range = new vscode.Range(
                        new vscode.Position(lineIndex, line.indexOf('animation')),
                        new vscode.Position(lineIndex, line.indexOf('animation') + 'animation'.length)
                    );
                    diagnostics.push(new vscode.Diagnostic(
                        range,
                        `Fade animations are forbidden. Use viewport entry animations instead.`,
                        vscode.DiagnosticSeverity.Warning
                    ));
                }
            }
            
            const keyframesMatch = line.match(/@keyframes\s+([^\s{]+)/);
            if (keyframesMatch) {
                const name = keyframesMatch[1].toLowerCase();
                if (name.includes('fade') || name.includes('opacity')) {
                    const range = new vscode.Range(
                        new vscode.Position(lineIndex, line.indexOf('@keyframes')),
                        new vscode.Position(lineIndex, line.indexOf('@keyframes') + '@keyframes'.length)
                    );
                    diagnostics.push(new vscode.Diagnostic(
                        range,
                        `Fade keyframes are forbidden. Use viewport entry animations instead.`,
                        vscode.DiagnosticSeverity.Warning
                    ));
                }
            }
        });
        
        return diagnostics;
    }
}