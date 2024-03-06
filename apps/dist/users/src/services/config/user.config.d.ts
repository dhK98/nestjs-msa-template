declare const _default: (() => {
    database: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    };
}>;
export default _default;
