// export const randomNum = (min: number, max: number): number => Math.random() * (max - min) + min;

// export const giveOrTake = (value: number, deviation: number): number => randomNum(value - deviation, value + deviation);

export const clamp = (value: number, min = 0, max = 1): number => Math.max(min, Math.min(value, max));

export function toDecimal(number: number, digits: number): number {
    return +number.toFixed(digits);
}

export async function generateHash(string: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(n => n.toString(16).padStart(2, '0')).join('');
}

export function seedToRange(number: number, min: number = 0, max: number = 100) {
    return min + (number / 255) * (max - min);
}

export function splitHashOnSeeds(hash: string): number[] {
    const result: number[] = [];

    for (let i = 0; i < hash.length; i += 2) {
        const hexByte = hash.slice(i, i + 2)
        const decimal = parseInt(hexByte, 16)
        result.push(decimal);
    }

    return result
}
