export type UniformType = "float" | "texture_url" | "texture_file";
export type UniformFormData = { type: UniformType, name: string, value: any };
export type UniformState = {
    [key: string]: {
        value: any,
        key: string
    }
};