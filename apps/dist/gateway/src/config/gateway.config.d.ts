declare const _default: (() => {
    port: number;
    host: string;
    redis: {
        host: string;
        port: number;
        password: string;
    };
    swagger: {
        user: string;
        password: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    host: string;
    redis: {
        host: string;
        port: number;
        password: string;
    };
    swagger: {
        user: string;
        password: string;
    };
}>;
export default _default;
