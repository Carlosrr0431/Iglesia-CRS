import { useStepperContext } from "../../../(context)/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Credit Card
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["card"] || ""}
            name="card"
            placeholder="Credit Card#"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Exp
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["exp"] || ""}
            name="exp"
            placeholder="YY/MM/DD"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}


//Array


import java.util.Scanner;


public class PilaArrayVector {

  Scanner teclado = new Scanner(System.in);


  int Pila[];
  int TOPE;
  int MAX;


  public PilaArrayVector(){

    this.TOPE = 0;
    this.MAX = 100;
    this.Pila = new int[this.MAX + 1 ];
  }

  public PilaArrayVector(int max) {

    this.TOPE = 0;
    this.MAX = max;
    this.pila = new int[this.MAX + 1];
  }

  public int getTOPE(){

    return this.TOPE;
  }

  public void vaciarPila() {

    this.TOPE = 0;
  }

  public boolean isPilaLlena(){

    if ( this.MAX == this.TOPE ) {
      return true;
    } else {
      return false;
    }
  }

  public boolean isPilaVacia() {

    if( this.TOPE == 0 ){
      return true
    } else
        return false;
  }

  public void insertarPila(){
    
    if ( this.isPilaLlena() ) {
      System.out.println("La Pila esta llena, no se pueden ingresar más elementos");
    } else {

      int item;

      System.out.println("Ingresa un nuevo elemento: ");
      item = this.teclado.nextInt();

      this.TOPE++;

      this.Pila[this.TOPE] = item;

    }

    public int extraerPila(){

      if ( this.isPilaVacia()) {
        System.out.println("La Pila esta vacia, no hay elementos para extraer")
      } else {

        this.TOPE--;

        return this.pila[this.TOPE + 1] 
      }
    }

    public void mostrarPila(){

      if ( this.isPilaVacia()){
        System.out.println("La Pila esta vacia, no hay elementos para mostrar");
      } else {


        int i;

        for ( i = 0 ; i <= this.TOPE ; i++ ){
          System.out.println("Elemento: " + this.Pila[i])
        }
      }
    }

    public void mostrarPila(){

      if ( this.isPilaVacia()){
        System.out.println("La Pila esta vacia, no hay elementos para eliminar");
      } else {

        int item = this.Pila[this.TOPE];

        this.TOPE--;

        System.out.println("El elemento eliminado fue: " + item );
      
      }
    }

  }
}







//Lista enlazada



public class Pila {
	
  class Nodo {
      int info;
      Nodo sig;
  }

  private Nodo raiz;
  
  public Pila () {
      raiz=null;
  }
  
  public void insertar( int x ) {

      Nodo nuevo;
      nuevo = new Nodo();
      nuevo.info = x;

      if ( raiz == null )
      {
          nuevo.sig = null;
          raiz = nuevo;
      }
      else
      {
          nuevo.sig = raiz;
          raiz = nuevo;
      }

  }
  
  public int extraer ()
  {
      if (raiz!=null)
      {
          int informacion = raiz.info;
          raiz = raiz.sig;
          return informacion;
      }
      else
      {
          return Integer.MAX_VALUE;
      }
  }
  
  public void imprimir() {
      Nodo reco=raiz;
      System.out.println("Listado de todos los elementos de la pila.");
      while (reco!=null) {
          System.out.print(reco.info+"-");
          reco=reco.sig;
      }
      System.out.println();
  }
  
  public static void main(String[] ar) {
      Pila pila1=new Pila();
      pila1.insertar(10);
      pila1.insertar(40);
      pila1.insertar(3);
      pila1.imprimir();
      System.out.println("Extraemos de la pila:"+pila1.extraer());
      pila1.imprimir();        
  }
}


// Colas

import java.util.Scanner;


public class ColaArray 
{
    private int MAX;
    private int[] COLA;
    private int FRENTE;
    private int FINAL;
    Scanner teclado = new Scanner(System.in);

    public ColaArray()
    {
        this.MAX = 100;
        this.FRENTE = 0;
        this.FINAL = 0;
        this.COLA = new int[this.MAX+1];
    }

    public ColaArray(int MAX)
    {
        this.MAX = MAX;
        this.FRENTE = 0;
        this.FINAL = 0;  
        this.COLA = new int[this.MAX+1];
    }  
    
    public boolean IsColaLlena()
    {
        if(this.FINAL == this.MAX)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public boolean IsColaVacia()
    {
        if(this.FRENTE == this.FINAL)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    public void InsertarCola()
    {
        if(this.IsColaLlena())
        {
            System.out.println("La cola esta llena");
        }
        else
        {
            int ITEM;

            System.out.print("Ingrese el elemento: ");

            ITEM = teclado.nextInt();
            
            this.FINAL++; 
            this.COLA[FINAL] = ITEM;
                       
        }
    }

    public int extraerElemento()
    {
        if(this.FRENTE == this.FINAL)
        {
            System.out.println("La cola esta vacia")
        }
        else
        {            
           this.FRENTE++;

           return this.COLA[this.FRENTE--];
        }
    }

    public void MostrarCola()
    {
        if(this.IsColaVacia())
        {
            System.out.println("La cola esta vacia, no hay datos que mostrar");
        }
        else
        {
            String MOSTRAR = "";
            
            for ( int i = FRENTE + 1 ; i <= FINAL ; i++ )
            {
                MOSTRAR = MOSTRAR + COLA[i]+"\n";
            }
            
          System.out.println("Los datos de la cola son: " + MOSTRAR)
        }
    }

    public void VaciarCola()
    {
        FRENTE = 0;
        FINAL = 0;
    }       
}




public class ColaEnlazada {

 class Node {
   int elem;
   Node sig;

   public Node(int elemNew) {
     this.elem = elemNew;
     this.sig = null;
   }
 }

 Node frente;
 Node final;
 int tamaño;

 public ColaEnlazada() {
   final = null;
   tamaño = 0;
 }

 public void agregarElemento(int newElem) {

   Node nuevoNodo = new Node(newElem);
   if (frente == null) {
     frente = newElem;
     final = newElem;
   } else {
     final.sig = newElem;
     final = newElem;
   }
   tamaño++;
 }; 

 public int quitarElemento() {
   if (frente == null)
     return null;
   
   int elemento = frente.elem;
   frente = frente.sig;
   tamaño--;
   return elemento;
 } 

 public int mostrarCola() {

  Nodo reco = this.frente;

    while ( reco != null ) {

      System.out.println("Elemento: " + reco.elem );

      reco = reco.sig;
    }


 }

 public boolean isVacio() {
   return (size == 0);
 }

 public int getTamaño() {
   return tamaño;
 }

 public int getFrente() {
   if (frente == null)
     return null;
   else
     return frente.elem;
 }

} 




// Lista doblemente enlazada

public class ListaCircular {

  class Node {
    int elem;
    Node sig;
    Node ant;
 
    public Node(int elemNew) {
      this.elem = elemNew;
      this.sig = null;
      this.ant = null;
    }
  }
 
  Node final;
  Node principio;
  int tamaño;
 
  public ListaCircular() {
    final = null;
    principio = null;
    tamaño = 0;
  }
 
  public void agregarElemento(int newElem) {
 
    Node nuevoNodo = new Node(newElem);

    if (final == null) {

      nuevoNodo.sig = null;
      nuevoNodo.ant = null;
      final = nuevoNodo;
      principio = nuevoNodo;

    } else {

        final.sig = nuevoNodo;
        nuevoNodo.sig = principio;
        nuevoNodo.ant = final;
        final = nuevoNodo;
        principio.ant = nuevoNodo
    }

    tamaño++;
  }; 

  public void agregarElementoOrdenado( int newElem ) {

    Node nuevoNodo = new Node(newElem);

    if (final == null) {

      nuevoNodo.sig = null;
      nuevoNodo.ant = null;
      final = nuevoNodo;
      principio = nuevoNodo;

    } else {

        Node reco = principio;
        Node aux;
        boolean flag = true;
        int index = 0;

        while ( index < tamaño && flag ) {

          if ( newElem < reco.elem ) {
            flag = false;
          }

          if ( flag ) {
            aux = reco;
            reco = reco.sig;
            index++;
          }

        }

        if ( index == 0 ) {
          principio.ant = nuevoNodo;
          principio = nuevoNodo;
          nuevoNodo.sig = reco;
          nuevoNodo.ant = final;
        } else if ( index != tamaño  ) {

          aux.sig = nuevoNodo;
          nuevoNodo.ant = reco.ant;
          nuevoNodo.sig = reco;
          reco.ant = nuevoNodo;
        } else {

          aux.sig = nuevoNodo;
          final = nuevoNodo;
          nuevoNodo.ant = aux;
          nuevoNodo.sig = principio;

        }


    }

    tamaño++;


  }
 
  public int quitarElemento() {

    int elemento;

    if ( final == null ) {
      return null; 
    } else if ( final.sig == null ) {
        elemento = final.elem;
        final = null;
    } else {
      elemento = final.elem;
      final = final.ant;
      final.sig = principio;
      principio.ant = final;
      
    }

    tamaño--;

    return elemento;
  } 
 
  public int mostrarListaPrincipio() {
 
   Nodo reco = this.principio;
 
   if ( reco.sig == null ) {
    System.out.println("Elemento: " + reco.elem );
   } else {

      Node reco = principio;
      int index = 0;

      while ( index < tamaño ) {
        System.out.println("Elemento: " + reco.elem );

        reco = reco.sig;
        index++;
      }

   }

  }

  public int mostrarListaFinal() {
 
    Nodo reco = this.final;
  
    if ( reco.sig == null ) {
     System.out.println("Elemento: " + reco.elem );
    } else {
 
       Node reco = final;
       int index = 0;
 
       while ( index < tamaño ) {
         System.out.println("Elemento: " + reco.elem );
 
         reco = reco.ant;
         index++;
       }
 
 
    }
  
  
   }
 
  public boolean isVacio() {
    return (tamaño == 0);
  }
 
  public int getTamaño() {
    return tamaño;
  }
 
  public int getFinal() {
    if (final == null)
      return null;
    else
      return final.elem;
  }
 
 } 
 
 


1: [ 8 3 5 1 4 2 ] key = 3

2: [ 8 3 5 1 4 2 ] key = 5




3: [ 8 3 5 1 4 2 ]

public void ordenacionInsercion( arreglo [] )  {

  for ( int j = 1 ; j < arreglo.lenght() ; j++ ) {

    int key = arreglo[j];

    int i = j - 1;

    while ( i > 0 && arreglo[i] > key ) {

      arreglo[ i + 1 ] = arreglo[ i ];
      i = i - 1;

    }

    arrelgo[ i + 1 ] = key;

  }

  
}



public class mergesort {

	public static int[] mergesort(int[] arr,int lo,int hi) {
		
		if(lo==hi) {
			int[] ba=new int[1];
			ba[0]=arr[lo];
			return ba;
		}
		
		int mid=(lo+hi)/2;
		int arr1[]=mergesort(arr,lo,mid);
		int arr2[]=mergesort(arr,mid+1,hi);
		return merge(arr1,arr2);
	}
	
	public static int[] merge(int[] arr1,int[] arr2) {
		int i=0,j=0,k=0;
		int n=arr1.length;
		int m=arr2.length;
		int[] arr3=new int[m+n];
		while(i<n && j<m) {
			if(arr1[i]<arr2[j]) {
				arr3[k]=arr1[i];
				i++;
			}
			else {
				arr3[k]=arr2[j];
				j++;
			}
			k++;
		}
		
		while(i<n) {
			arr3[k]=arr1[i];
			i++;
			k++;
		}
		
		while(j<m) {
			arr3[k]=arr2[j];
			j++;
			k++;
		}
		
		return arr3;
		
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int arr[]= {2,9,8,3,6,4,10,7};
		int[] so=mergesort(arr,0,arr.length-1);
		for(int i=0;i<arr.length;i++)
			System.out.print(so[i]+" ");
	}

}


quicksort(a, 0, n-1);

void quicksort(double a[], int primero, int ultimo)
{
    int i, j, central;
    double pivote;
    central = (primero + ultimo)/2;
    pivote = a[central];
    i = primero;
    j = ultimo;

    do {
      while (a[i] < pivote) i++;
      while (a[j] > pivote) j--;

      if (i <= j)
      {
        double tmp;
        tmp = a[i];
        a[i] = a[j];
        a[j] = tmp; /* intercambia a[i] con a[j] */
        i++;
        j--;
      }
    } while (i <= j);
    if (primero < j)
      quicksort(a, primero, j); /* mismo proceso con sublista izqda */
    if (i < ultimo)
      quicksort(a, i, ultimo); /* mismo proceso con sublista drcha */
}