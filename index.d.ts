declare module "co" {

    function c(fn: Function): any

    namespace c {
        export function wrap(fn: Function): any
    }

    export = c;
}