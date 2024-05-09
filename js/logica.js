function arrobj(){
     let curso = [
                {"cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
                {"cod_curso" : "BD253","descripcion" : "Bases de Datos"}
                 ]
                 console.log("CURSO: ")        

                 for (let i = 0; i < curso.length; i++) {
                    console.log("*************************"),
                    console.log("cod_curso: " + curso[i].cod_curso),
                    console.log("descripcion: " + curso[i].descripcion),
                    console.log("***************************")

                 }
                    

    let alumno =[

                {"rut": "1-9","nombre":"pedro","apellido":"perez"},
                {"rut": "2-7","nombre":"juan","apellido":"jara"},
                {"rut": "3-5","nombre":"diego","apellido":"diaz"},
                {"rut": "4-4","nombre":"maria","apellido":"martinez"}
    
                ]
                console.log("ALUMNO: ")  
                for (let i = 0; i < alumno.length; i++) {
                    console.log("***************************"),              
                    console.log("rut: " + alumno[i].rut),
                    console.log("nombre: " + alumno[i].nombre),
                    console.log("apellido: " + alumno[i].apellido),
                    console.log("***************************") 
                    
               
    
            }

     let alumnos_matriculados =[
                {"rut": "1-9","nombre":"pedro","apellido":"perez","cod_curso":"AE600","DESCRIPCION":"ALGORITMOS Y ESTRUCTURAS DE DATOS"},
                {"rut": "2-7","nombre":"JUAN","apellido":"Jara","cod_curso":"BD253","descripcion":"bases de datos"},
                {"rut": "2-7","nombre":"juan","apellido":"Jara","cod_curso":"BD253","descripcion":"algoritmos y estructura de datos"},
                {"rut": "3-5","nombre":"diego","apellido":"diaz","cod_curso":"BD253","descripcion":"bases de datos"},
                {"rut": "4-4","nombre":"maria","apellido":"martinez","cod_curso":"BD253","descripcion":"bases de datos"},

        ]
                console.log("ALUMNOS_MATRICULADOS: ")
                 for (let i = 0; i < alumnos_matriculados.length; i++) {
                        console.log("************************ ")  
                        console.log("rut: "+alumnos_matriculados[i].rut),
                        console.log("nombre: "+alumnos_matriculados[i].nombre),
                        console.log("apellido: "+alumnos_matriculados[i].apellido),
                        console.log("descripcion: "+alumnos_matriculados[i].descripcion),
                        console.log("***************************")
                }
                
                
        

        let matricula = [
                {"rut":"1-9","cod_curso":"AE600"},
                {"rut":"2-7","cod_curso":"BD253"},
                {"rut":"2-7","cod_curso":"AE600"},
                {"rut":"3-5","cod_curso":"BD253"},
                {"rut":"4-4","cod_curso":"BD253"}
        ]
                console.log("MATRICULA: ")
                for (let i = 0; i < matricula.length; i++) {
                        console.log("*******************************"),
                        console.log("rut: " + matricula [i].rut),
                        console.log("cod_curso: "+ matricula [i].cod_curso)
                }

       
                        
                
                        
        
}