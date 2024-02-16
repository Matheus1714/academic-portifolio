export function generatePath(text: string){
    return text
            .split(" ")
            .filter(e => e)
            .join("-")
            .toLowerCase()
}