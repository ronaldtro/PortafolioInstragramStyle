export interface Project{
    _id?: string,
    projectId: string,
    nombre: string,
    fecha?: string,
    descripcion: string,
    stack: string,
    imagen: {
        data: string,
        type: string
    }
}