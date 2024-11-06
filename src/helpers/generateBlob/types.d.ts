export type Point = [number, number];

export interface CreatePolygon {
    verts?: number;
    width?: number;
    height?: number;
    irregularity?: number;
    spikiness?: number;
    boundingShape?: 'rectangle' | 'ellipsis';
}

export interface CreatePolygon1 {
    width?: number;
    height?: number;
}

export interface CreateBlob extends CreatePolygon1 {
    hash: string;
}

export interface BlobProps extends CreateBlob {
    style?: object;
    fill?: string;
    stroke?: string;
    className?: string;
    pathStyle?: object;
}

