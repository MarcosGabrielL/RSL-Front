export interface Post{
      
       id: string;
                            idperson: string;
                            texto: string;
                            email: string;
                            tipo: string;
                             hora: string;
                             hastags: string;
                             local: string;
}

export interface FileDB{
	
	 id: string;
	 name: string; 
	 type: string;
	 data: File;
	 idpost: string;

}

