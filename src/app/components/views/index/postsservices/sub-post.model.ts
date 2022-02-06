export interface SubPost{
      
       id: string;
                            idperson: string;
                            texto: string;
                            email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
       
}

export interface Posttext{

id: string;
                            idperson: string;
                            texto: string;
                            email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
}

export interface Post{
id: string;
                            idperson: string;
                             email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
}


export interface Postimagem{
id: string;
                            idperson: string;
                            texto: string;
                            idimagem: string;
                             email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
                             description: string;
}

export interface  Postenquete{
id: string;
                            idperson: string;
                            Pergunta: string;
                            ResPosta1: string;
                            ResPosta2: string;
                            ResPosta3: string;
                            ResPosta4: string;
                            total_resPosta: string;
                             email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
                             description: string;
}

export interface  PostReel{id: string;
                            idperson: string;
                            texto: string;
                            idimagem: string;
                            ResPosta2: string;
                            ResPosta3: string;
                            ResPosta4: string;
                            total_resPosta: string;
                            email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
                             description: string;
}

export interface PostStories{id: string;
                            idperson: string;
                            texto: string;
                            idimagem: string;
                            email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
                             description: string;
}
export interface PostVideos{id: string;
                            idperson: string;
                            texto: string;
                            idimagem: string;
                            email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
                             description: string;
}
