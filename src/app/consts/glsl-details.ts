export const voidDetails = `
Declaration 

void main(void);
int aFunction(void);
void bFunction(float);
Description
void is used when a function has no parameters or when a function does not return a value.`

export const boolDetails = `
Boolean variable type

Declaration

bool aBool = true;
bool bBool = bool(aInt);
bool cBool = bool(aFloat);

Description

bool data type is either true or false.`

export const bvec2Details = `
2 dimensional boolean vector

Declaration
bvec2 aBvec2 = bvec2(true, true);
bvec2 bBvec2 = bvec2(true);

bvec2 cBvec2 = bvec2(aBvec3);
bvec2 dBvec2 = bvec2(aBvec3.x, aBvec3.y);
Description
bvec2 is a boolean vector with two components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a vector of higher dimension. The respective values are used to initialize the components.
`

export const bvec3Details = `
3 dimensional boolean vector

Declaration
vec3 aBvec3 = bvec3(true, true, true);
vec3 bBvec3 = bvec3(true);

vec3 cBvec3 = bvec3(aBvec4);
vec3 dBvec3 = bvec3(aBvec4.x, aBvec4.y, aBvec4.z);

vec3 eBvec3 = bvec3(aBvec2, aBool);
vec3 fBvec3 = bvec3(aBvec2.x, aBvec2.y, aBool);
Description
bvec3 is a boolean vector with three components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a vector of higher dimension. The respective values are used to initialize the components.
Providing a combination of vectors and/or scalars. The respective values are used to initialize the vector. The arguments of the constructor must have at least as many components as the vector that is initialized.
`

export const bvec4Details = `
4 dimensional boolean vector

Declaration
vec4 aBvec4 = bvec4(true, true, true, true);
vec4 bBvec4 = bvec4(true);

vec4 cBvec4 = bvec4(aBvec2, aBool, aBvec3);
vec4 dBvec4 = bvec4(aBvec2.x, aBvec2.y, aBool, aBvec3.x);
Description
bvec4 is a boolean vector with four components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a combination of vectors and scalars. The respective values are used to initialize the components. The arguments of the constructor must have at least as many components as the vector that is initialized.
`

export const Ivec2Details = `
2 dimensional integer vector

Declaration
bvec2 aIvec2 = ivec2(1, 1);
bvec2 bIvec2 = ivec2(1);

bvec2 cIvec2 = ivec2(aIvec3);
bvec2 dIvec2 = ivec2(aIvec3.x, aIvec3.y);
Description
ivec2 is an integer vector with two components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a vector of higher dimension. The respective values are used to initialize the components.
`

export const Ivec3Details = `
3 dimensional integer vector

Declaration
vec3 aIvec3 = ivec3(1, 1, 1);
vec3 bIvec3 = ivec3(1);

vec3 cIvec3 = ivec3(aIvec4);
vec3 dIvec3 = ivec3(aIvec4.x, aIvec4.y, aIvec4.z);

vec3 eIvec3 = ivec3(aIvec2, aInt);
vec3 fIvec3 = ivec3(aIvec2.x, aIvec2.y, aInt);
Description
ivec3 is an integer vector with three components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a vector of higher dimension. The respective values are used to initialize the components.
Providing a combination of vectors and/or scalars. The respective values are used to initialize the vector. The arguments of the constructor must have at least as many components as the vector that is initialized.
`

export const Ivec4Details = `
4 dimensional integer vector

Declaration
vec4 aIvec4 = ivec4(1, 1, 1, 1);
vec4 bIvec4 = ivec4(1);

vec4 cIvec4 = ivec4(aIvec2, aInteger, aIvec3);
vec4 dIvec4 = ivec4(aIvec2.x, aIvec2.y, aInt, aIvec3.x);
Description
ivec4 is an integer vector with four components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a combination of vectors and/or scalars. The respective values are used to initialize the vector. The arguments of the constructor must have at least as many components as the vector that is initialized.
`

export const vec2Details = `
2 dimensional floating point vector

Declaration
vec2 aVec2 = vec2(1.0, 1.0);
vec2 bVec2 = vec2(1.0);

vec2 cVec2 = vec2(aVec3);
vec2 dVec2 = vec2(aVec3.x, aVec3.y);
Description
vec2 is a floating point vector with two components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a vector of higher dimension. The respective values are used to initialize the components.
`
export const vec3Details = `
3 dimensional floating point vector

Declaration
vec3 aVec3 = vec3(1.0, 1.0, 1.0);
vec3 bVec3 = vec3(1.0);

vec3 cVec3 = vec3(aVec4);
vec3 dVec3 = vec3(aVec4.x, aVec4.y, aVec4.z);

vec3 eVec3 = vec3(aVec2, aFloat);
vec3 fVec3 = vec3(aVec2.x, aVec2.y, aFloat);
Description
vec3 is a floating point vector with three components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a vector of higher dimension. The respective values are used to initialize the components.
Providing a combination of vectors and/or scalars. The respective values are used to initialize the vector. The arguments of the constructor must have at least as many components as the vector that is initialized.
`

export const vec4Details = `
4 dimensional floating point vector

Declaration
vec4 aVec4 = vec4(1.0, 1.0, 1.0, 1.0);
vec4 bVec4 = vec4(1.0);

vec4 cVec4 = vec4(aVec2, aFloat, aVec3);
vec4 dVec4 = vec4(aBvec2.x, aBvec2.y, aFloat, aBvec3.x);
Description
vec4 is a floating point vector with four components. It can be initialized by:

Providing a scalar value for each component.
Providing one scalar value. This value is used for all components.
Providing a combination of vectors and scalars. The respective values are used to initialize the components. The arguments of the constructor must have at least as many components as the vector that is initialized.
`

export const mat2Details = `
2x2 floating point matrix

Declaration
mat2 aMat2 = mat2(1.0, 0.0,  // 1. column
                  0.0, 1.0); // 2. column
mat2 bMat2 = mat2(1.0);
mat2 cMat2 = mat2(aVec2, bVec2);
mat2 dMat2 = mat2(aVec3, aFloat);
Description
mat2 data type is compose for a 2x2 matrix of floating point. As you can see above, can be initialize in different ways:

Providing a value for each component column by column.

Providing one value that is used for the components on the main diagonal.

Providing a combination of vectors and scalars.
In the same way data can be accessed component-wise or column by column:

mat2 aMat2;
aMat2[1][1] = 1.0;
float aFloat = aMat2[1][1];

aMat2[0] = vec2(1.0);
vec2 aVec2 = aMat2[0];
`

export const mat3Details = `
3x3 floating point matrix

Declaration
mat3 aMat3 = mat3(1.0, 0.0, 0.0,  // 1. column
                  0.0, 1.0, 0.0,  // 2. column
                  0.0, 0.0, 1.0); // 3. column
mat3 bMat3 = mat3(1.0);

mat3 cMat3 = mat3(aVec3, bVec3, cVec3);
mat3 dMat3 = mat3(aVec4, aVec3, bVec4, aFloat);
Description
mat3 data type is compose for a 3x3 matrix of floating point. As you can see above, can be initialize in different ways:

Providing a value for each component column by column.

Providing one value that is used for the components on the main diagonal.

Providing a combination of vectors and scalars.
In the same way data can be accessed component-wise or column by column:

mat3 aMat3;
aMat3[2][2] = 1.0;
float aFloat = aMat3[2][2];

aMat3[0] = vec3(1.0);
vec3 aVec3 = aMat3[0];
`

export const mat4Details = `
4x4 floating point matrix

Declaration
mat4 aMat4 = mat4(1.0, 0.0, 0.0, 0.0,  // 1. column
                  0.0, 1.0, 0.0, 0.0,  // 2. column
                  0.0, 0.0, 1.0, 0.0,  // 3. column
                  0.0, 0.0, 0.0, 1.0); // 4. column
mat4 bMat4 = mat4(1.0);

mat4 cMat4 = mat4(aVec4, bVec4, cVec4, dVec4);
mat4 dMat4 = mat4(aVec4, aVec3, bVec4, cVec4, aFloat);
Description
mat4 data type is compose for a 4x4 matrix of floating point. As you can see above, can be initialize in different ways:

Providing a value for each component column by column.

Providing one value that is used for the components on the main diagonal.

Providing a combination of vectors and scalars.
In the same way data can be accessed component-wise or column by column:

aMat4[3][3] = 1.0;
float aFloat = aMat4[3][3];

aMat4[0] = vec4(1.0);
vec4 aVec4 = aMat4[0];
`

export const mixDetails = `
Constrain a value to lie between two further values

Declaration

float mix(float x, float y, float a)  
vec2 mix(vec2 x, vec2 y, vec2 a)  
vec3 mix(vec3 x, vec3 y, vec3 a)  
vec4 mix(vec4 x, vec4 y, vec4 a)

vec2 mix(vec2 x, vec2 y, float a)  
vec3 mix(vec3 x, vec3 y, float a)  
vec4 mix(vec4 x, vec4 y, float a)

Parameters

x Specify the start of the range in which to interpolate.

y Specify the end of the range in which to interpolate.

a Specify the value to use to interpolate between x and y.

Description

mix() performs a linear interpolation between x and y using a to weight between them. The return value is computed as x×(1−a)+y×a.
`

export const attributeDetails = `
Vertex attribute data.

Example
attribute vec4 v_color;
Description
attribute read-only variables containing data shared from WebGL/OpenGL environment to the vertex shader.

Because the vertex shader is executed one time for each vertex, attributes are specify per vertex data typically with information such as: space position, color, normal direction and texture coordinates of a vertex.`

export const intDetails = `
Integer data type

Declaration 
int aInt = 42; 
int bInt = int(aBool); 
int cInt = int(aFloat); 
Description 
int is used for integer values.`

export const floatDetails = `
 Floating-point variable type 

Declaration 
float aFloat = 1.0; 
float bFloat = float(aBool); 
float cFloat = float(aInt); 
Description 
float is used for floating point values. 
`

export const constDetails = `
Constant qualifier 

Example 
const float PI = 3.14159265359; 
Description 
const qualifier can be applied to the declaration of any variable to specify that its value will not be changed.
`

export const uniformDetails = `
Uniform variable qualifier. 

Example 
uniform vec4 direction; 
Description 
uniform variables contain read-only data shared from WebGL/OpenGL environment to a vertex or fragment shader. 

The value is per primitive, so is useful for variables which remain constant along a primitive, frame or scene. 
`

export const varyingDetails = `
Varying variable qualifier. 

Example
varying vec3 position;
Description
varying variables contain data shared from a vertex shader to a fragment shader.

The variable must be written in the vertex shader and the read-only value in the fragment shader is then interpolated from the vertices which make up the fragment.
`

export const radiansDeclaration = `
Convert a quantity in degrees to radians 

Declaration 
float radians(float degrees)   
vec2 radians(vec2 degrees)  
vec3 radians(vec3 degrees)  
vec4 radians(vec4 degrees) 
Parameters 
degrees specify the quantity, in degrees, to be converted to radians. 

Description 
radians() converts a quantity, specified in degrees into radians. That is, the return value is (PI * degrees)/180.`

export const sinDetails = `
Return the sine of the parameter

Declaration
float sin(float angle)  
vec2 sin(vec2 angle)  
vec3 sin(vec3 angle)  
vec4 sin(vec4 angle)
Parameters
angle specify the quantity, in radians, of which to return the sine.

Description
sin() returns the trigonometric sine of angle.`

export const cosDetails = `
Return the cosine of the parameter 

Declaration 
float cos(float angle)  
vec2 cos(vec2 angle)  
vec3 cos(vec3 angle)  
vec4 cos(vec4 angle) 
Parameters 
angle specify the quantity, in radians, of which to return the cosine.

Description 
cos() returns the trigonometric cosine of angle.
`

export const tanDetails = `
Return the tangent of the parameter 

Declaration 
float tan(float angle)  
vec2 tan(vec2 angle)  
vec3 tan(vec3 angle)  
vec4 tan(vec4 angle) 
Parameters 
angle specify the quantity, in radians, of which to return the tangent.

Description 
tan() returns the trigonometric tangent of angle.
`

export const asinDetails = `
Return the arcsine of the parameter 

Declaration 
float asin(float x)  
vec2 asin(vec2 x)  
vec3 asin(vec3 x)  
vec4 asin(vec4 x)
Parameters 
x specify the value whose arcsine to return. 

Description 
asin() returns the angle whose trigonometric sine is x.
`

export const acosDetails = `
Return the arccosine of the parameter

Declaration
float acos(float x)  
vec2 acos(vec2 x)  
vec3 acos(vec3 x)  
vec4 acos(vec4 x)
Parameters
x specify the value whose arccosine to return.

Description
acos() returns the angle whose trigonometric cosine is x.
`

export const atanDetails = `
Return the arc-tangent of the parameters 

Declaration 
float atan(float y, float x)   
vec2 atan(vec2 y, vec2 x)  
vec3 atan(vec3 y, vec3 x)  
vec4 atan(vec4 y, vec4 x)

float atan(float y_over_x)  
vec2 atan(vec2 y_over_x)  
vec3 atan(vec3 y_over_x)  
vec4 atan(vec4 y_over_x)
Parameters
y specify the numerator of the fraction whose arctangent to return.

x specify the denominator of the fraction whose arctangent to return.

y_over_x specify the fraction whose arctangent to return.

Description
atan() returns the angle whose trigonometric arctangent is y,x or y_over_x, depending on which overload is invoked. In the first overload, the signs of y and x are used to determine the quadrant that the angle lies in. The values returned by atan in this case are in the range -PI and PI. Results are undefined if x is zero.

For the second overload, atan() returns the angle whose tangent is y_over_x. Values returned in this case are in the range -PI to PI.`

export const powDetails = `
Return the value of the first parameter raised to the power of the second. 

Declaration 
float pow(float x, float y)  
vec2 pow(vec2 x, vec2 y)  
vec3 pow(vec3 x, vec3 y)  
vec4 pow(vec4 x, vec4 y)
Parameters
x specify the value to raise to the power y.

y specify the power to which to raise x.

Description
pow() returns the value of x raised to the y power.
`

export const expDetails = `
Return the natural exponentiation of the parameter 

Declaration 
float exp(float x)  
vec2 exp(vec2 x)  
vec3 exp(vec3 x)  
vec4 exp(vec4 x)
Parameters
x specify the value to exponentiate.

Description
exp() returns the natural exponentiation of x.
`

export const logDetails = `
Return the natural logarithm of the parameter 

Declaration 
float log(float x)   
vec2 log(vec2 x)  
vec3 log(vec3 x)  
vec4 log(vec4 x)
Parameters
x specify the value of which to take the natural logarithm.

Description
log() returns the natural logarithm of x.
`

export const exp2Details = `
Return 2 raised to the power of the parameter 

Declaration 
float exp2(float x)  
vec2 exp2(vec2 x)  
vec3 exp2(vec3 x)  
vec4 exp2(vec4 x)
Parameters
x specify the value of the power to which 2 will be raised.

Description
exp2() returns 2 raised to the power of x.
`

export const log2Details = `
Return the base 2 logarithm of the parameter 

Declaration 
float log2(float x)  
vec2 log2(vec2 x)  
vec3 log2(vec3 x)  
vec4 log2(vec4 x)
Parameters
x specify the value of which to take the base 2 logarithm.

Description
log2() returns the base 2 logarithm of x.`

export const sqrtDetails = `
Return the square root of the parameter

Declaration
float sqrt(float x)  
vec2 sqrt(vec2 x)  
vec3 sqrt(vec3 x)  
vec4 sqrt(vec4 x)
Parameters
x specify the value of which to take the square root.

Description
sqrt() returns the square root of x.
`

export const inverseSqrtDetails = `
Return the inverse of the square root of the parameter 

Declaration 
float inversesqrt(float x)  
vec2 inversesqrt(vec2 x)  
vec3 inversesqrt(vec3 x)  
vec4 inversesqrt(vec4 x)
Parameters
x specify the value of which to take the inverse of the square root.

Description
inversesqrt() returns the inverse of the square root of x.`

export const absDetails = `
Return the absolute value of the parameter. 

Declaration 
float abs(float x)  
vec2 abs(vec2 x)  
vec3 abs(vec3 x)  
vec4 abs(vec4 x)
Parameters
x specify the value of which to return the absolute.

Description
abs() returns the absolute value of x.
`

export const signDetails = `
Extract the sign of the parameter 

Declaration 
float sign(float x)  
vec2 sign(vec2 x)  
vec3 sign(vec3 x)  
vec4 sign(vec4 x)
Parameters
x specify the value from which to extract the sign.

Description
sign() returns -1.0 if x is less than 0.0, 0.0 if x is equal to 0.0, and +1.0 if x is greater than 0.0.
`

export const floorDetails = `
Find the nearest integer less than or equal to the parameter 

Declaration 
float floor(float x)  
vec2 floor(vec2 x)  
vec3 floor(vec3 x)  
vec4 floor(vec4 x)
Parameters
x specify the value to evaluate.

Description
floor() returns a value equal to the nearest integer that is less than or equal to x.
`

export const ceilDetails = `
Find the nearest integer that is greater than or equal to the parameter 

Declaration 
float ceil(float x)  
vec2 ceil(vec2 x)  
vec3 ceil(vec3 x)  
vec4 ceil(vec4 x)
Parameters
x specify the value to evaluate.

Description
ceil() returns a value equal to the nearest integer that is greater than or equal to x.
`

export const fractDetails = `
Compute the fractional part of the argument 

Declaration 
float fract(float x)  
vec2 fract(vec2 x)  
vec3 fract(vec3 x)  
vec4 fract(vec4 x)
Parameters
x specify the value to evaluate.

Description
fract() returns the fractional part of x. This is calculated as x - floor(x).`

export const modDetails = `
Compute value of one parameter modulo another

Declaration
float mod(float x, float y)  
vec2 mod(vec2 x, vec2 y)  
vec3 mod(vec3 x, vec3 y)  
vec4 mod(vec4 x, vec4 y)

vec2 mod(vec2 x, float y)  
vec3 mod(vec3 x, float y)  
vec4 mod(vec4 x, float y)
Parameters
x specify the value to evaluate. y specify the value to obtain the modulo of.

Description
mod() returns the value of x modulo y. This is computed as x - y * floor(x/y).
`


export const minDetails = `
Return the lesser of two values 

Declaration 
float min(float x, float y)  
vec2 min(vec2 x, vec2 y)  
vec3 min(vec3 x, vec3 y)  
vec4 min(vec4 x, vec4 y)

vec2 min(vec2 x, float y)  
vec3 min(vec3 x, float y)  
vec4 min(vec4 x, float y)
Parameters
x specify the first value to compare.

y specify the second value to compare.

Description
min() returns the minimum of the two parameters. It returns y if y is less than x, otherwise it returns x.
`

export const maxDetails = `
Return the greater of two values

Declaration
float max(float x, float y)  
vec2 max(vec2 x, vec2 y)  
vec3 max(vec3 x, vec3 y)  
vec4 max(vec4 x, vec4 y)

vec2 max(vec2 x, float y)  
vec3 max(vec3 x, float y)  
vec4 max(vec4 x, float y)
Parameters
x specify the first value to compare.

y specify the second value to compare.

Description
max() returns the maximum of the two parameters. It returns y if y is greater than x, otherwise it returns x.
`
export const clampDetails = `
Constrain a value to lie between two further values

Declaration
float clamp(float x, float minVal, float maxVal)  
vec2 clamp(vec2 x, vec2 minVal, vec2 maxVal)  
vec3 clamp(vec3 x, vec3 minVal, vec3 maxVal)  
vec4 clamp(vec4 x, vec4 minVal, vec4 maxVal)

vec2 clamp(vec2 x, float minVal, float maxVal)  
vec3 clamp(vec3 x, float minVal, float maxVal)  
vec4 clamp(vec4 x, float minVal, float maxVal)
Parameters
x specify the value to constrain.

minVal specify the lower end of the range into which to constrain x.

maxVal specify the upper end of the range into which to constrain x.

Description
clamp() returns the value of x constrained to the range minVal to maxVal. The returned value is computed as min(max(x, minVal), maxVal).
`

export const stepDetails = `
Generate a step function by comparing two values

Declaration
float step(float edge, float x)  
vec2 step(vec2 edge, vec2 x)  
vec3 step(vec3 edge, vec3 x)  
vec4 step(vec4 edge, vec4 x)

vec2 step(float edge, vec2 x)  
vec3 step(float edge, vec3 x)  
vec4 step(float edge, vec4 x)
Parameters
edge specifies the location of the edge of the step function.

x specify the value to be used to generate the step function.

Description
step() generates a step function by comparing x to edge.

For element i of the return value, 0.0 is returned if x[i] < edge[i], and 1.0 is returned otherwise.
`

export const smoothstepDetails = `
Perform Hermite interpolation between two values

Declaration
float smoothstep(float edge0, float edge1, float x)  
vec2 smoothstep(vec2 edge0, vec2 edge1, vec2 x)  
vec3 smoothstep(vec3 edge0, vec3 edge1, vec3 x)  
vec4 smoothstep(vec4 edge0, vec4 edge1, vec4 x)

vec2 smoothstep(float edge0, float edge1, vec2 x)  
vec3 smoothstep(float edge0, float edge1, vec3 x)  
vec4 smoothstep(float edge0, float edge1, vec4 x)
Parameters
edge0 specifies the value of the lower edge of the Hermite function.

edge1 specifies the value of the upper edge of the Hermite function.

x specifies the source value for interpolation.

Description
smoothstep() performs smooth Hermite interpolation between 0 and 1 when edge0 < x < edge1. This is useful in cases where a threshold function with a smooth transition is desired. smoothstep() is equivalent to:

    genType t;  /* Or genDType t; */
    t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
Results are undefined if edge0 ≥ edge1.
`