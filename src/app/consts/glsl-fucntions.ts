import { acosDetails, asinDetails, atanDetails, boolDetails, bvec2Details, bvec3Details, bvec4Details, ceilDetails, clampDetails, constDetails, cosDetails, crossDetails, distanceDetails, dotDetails, exp2Details, expDetails, faceforwardDetails, floatDetails, floorDetails, fractDetails, intDetails, inverseSqrtDetails, Ivec2Details, Ivec3Details, Ivec4Details, lengthDetails, log2Details, logDetails, mat2Details, mat3Details, mat4Details, matrixCompMultDetails, maxDetails, minDetails, mixDetails, modDetails, normalizeDetails, powDetails, radiansDeclaration as radiansDetails, reflectDetails, refractDetails, signDetails, sinDetails, smoothstepDetails, sqrtDetails, stepDetails, tanDetails, uniformDetails, varyingDetails, vec2Details, vec3Details, vec4Details, voidDetails } from "./glsl-details";

export function createProposals(monaco: any, model: any, position: any) {

    const word = model.getWordUntilPosition(position)

    const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
    }

    const _void = {
        label: 'void',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'void $1',
        range: range,
        detail: voidDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const _bool = {
        label: 'bool',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'bool $1',
        range: range,
        detail: boolDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const int = {
        label: 'int',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'int $1',
        range: range,
        detail: intDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const float = {
        label: 'float',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'float $1',
        range: range,
        detail: floatDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }


    const bvec2 = {
        label: 'bvec2',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'bvec2',
        range: range,
        detail: bvec2Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const bvec3 = {
        label: 'bvec3',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'bvec3',
        range: range,
        detail: bvec3Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const bvec4 = {
        label: 'bvec4',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'bvec4',
        range: range,
        detail: bvec4Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const mat2 = {
        label: 'mat2',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'mat2',
        range: range,
        detail: mat2Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const mat3 = {
        label: 'mat3',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'mat3',
        range: range,
        detail: mat3Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const mat4 = {
        label: 'mat4',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'mat4',
        range: range,
        detail: mat4Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const ivec2 = {
        label: 'ivec2',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'ivec2',
        range: range,
        detail: Ivec2Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const ivec3 = {
        label: 'ivec3',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'ivec3',
        range: range,
        detail: Ivec3Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const ivec4 = {
        label: 'ivec4',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'ivec4',
        range: range,
        detail: Ivec4Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const vec2 = {
        label: 'vec2',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'vec2',
        range: range,
        detail: vec2Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }


    const vec3 = {
        label: 'vec3',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'vec3',
        range: range,
        detail: vec3Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }


    const vec4 = {
        label: 'vec4',
        kind: monaco.languages.CompletionItemKind.TypeParameter,
        insertText: 'vec4',
        range: range,
        detail: vec4Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const attribute = {
        label: 'attribute',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'attribute',
        range: range,
        detail: mixDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const _const = {
        label: 'const',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'const',
        range: range,
        detail: constDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const unitform = {
        label: 'unitform',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'unitform',
        range: range,
        detail: uniformDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const varying = {
        label: 'varying',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'varying',
        range: range,
        detail: varyingDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const precision = {
        label: 'precision',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'precision',
        range: range,
        detail: "precision for float values",
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const radians = {
        label: 'radians(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'radians($1)',
        range: range,
        detail: radiansDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const degrees = {
        label: 'degrees(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'degrees($1)',
        range: range,
        detail: radiansDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const sin = {
        label: 'sin(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'sin($1)',
        range: range,
        detail: sinDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const cos = {
        label: 'cos(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'cos($1)',
        range: range,
        detail: cosDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const tan = {
        label: 'tan(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'tan($1)',
        range: range,
        detail: tanDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const asin = {
        label: 'asin(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'asin($1)',
        range: range,
        detail: asinDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const acos = {
        label: 'acos(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'acos($1)',
        range: range,
        detail: acosDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const atan = {
        label: 'atan(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'atan($1)',
        range: range,
        detail: atanDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }


    const pow = {
        label: 'pow(x,y)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'pow($1,$2)',
        range: range,
        detail: powDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const exp = {
        label: 'exp(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'exp($1)',
        range: range,
        detail: expDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const log = {
        label: 'log(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'log($1)',
        range: range,
        detail: logDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const exp2 = {
        label: 'exp2(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'exp2($1)',
        range: range,
        detail: exp2Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const log2 = {
        label: 'log2(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'log2($1)',
        range: range,
        detail: log2Details,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const sqrt = {
        label: 'sqrt(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'sqrt($1)',
        range: range,
        detail: sqrtDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const inversesqrt = {
        label: 'inversesqrt(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'inversesqrt($1)',
        range: range,
        detail: inverseSqrtDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const mix = {
        label: 'mix(x,y,a)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'mix($1,$2,$3)',
        range: range,
        detail: mixDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const abs = {
        label: 'abs(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'abs($1)',
        range: range,
        detail: mixDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const sign = {
        label: 'sign(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'sign($1)',
        range: range,
        detail: signDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const floor = {
        label: 'floor(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'floor($1)',
        range: range,
        detail: floorDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const ceil = {
        label: 'ceil(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'ceil($1)',
        range: range,
        detail: ceilDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const fract = {
        label: 'fract(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'fract($1)',
        range: range,
        detail: fractDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const mod = {
        label: 'mod(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'mod($1)',
        range: range,
        detail: modDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const min = {
        label: 'min(x,y)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'min($1,$2)',
        range: range,
        detail: minDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const max = {
        label: 'max(x,y)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'max($1,$2)',
        range: range,
        detail: maxDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const clamp = {
        label: 'clamp(val,minVal,maxVal)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'max($1,$2,$3)',
        range: range,
        detail: clampDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const step = {
        label: 'step(edge,x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'step($1,$2)',
        range: range,
        detail: stepDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const smoothstep = {
        label: 'smoothstep(edge,edge1,x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'smoothstep($1,$2,$3)',
        range: range,
        detail: smoothstepDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const length = {
        label: 'length(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'length($1)',
        range: range,
        detail: lengthDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const distance = {
        label: 'distance(x,y)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'distance($1,$2)',
        range: range,
        detail: distanceDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const dot = {
        label: 'dot(x,y)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'dot($1,$2)',
        range: range,
        detail: dotDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const cross = {
        label: 'cross(x,y)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'cross($1,$2)',
        range: range,
        detail: crossDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const normalize = {
        label: 'normalize(x)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'normalize($1)',
        range: range,
        detail: normalizeDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const faceforward = {
        label: 'faceforward(x,y,nref)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'faceforward($1,$2,$3)',
        range: range,
        detail: faceforwardDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const reflect = {
        label: 'reflect(I,N)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'reflect($1,$2)',
        range: range,
        detail: reflectDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const refract = {
        label: 'refract(I,N,eta)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'refract($1,$2,$3)',
        range: range,
        detail: refractDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const matrixCompMult = {
        label: 'matrixCompMult(x,y)',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'matrixCompMult($1,$2)',
        range: range,
        detail: matrixCompMultDetails,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }

    const suggestions = [matrixCompMult, refract, reflect, faceforward, normalize, cross, dot, distance, length, sign, floor, ceil, fract, mod, min, max, clamp, step, smoothstep, abs, pow, exp, log, exp2, log2, sqrt, inversesqrt, tan, asin, acos, atan, _const, attribute, _void, _bool, int, float, bvec2, bvec3, bvec4, ivec2, ivec3, ivec3, ivec4, vec2, vec3, vec4, mat2, mat3, mat4, mix, varying, unitform, precision, sin, cos, radians, degrees];

    return suggestions;
}
