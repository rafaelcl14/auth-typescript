declare namespace Express{
    export interface Request {
        userId: string;
    }
    console.log('👍...', req.userId);
}