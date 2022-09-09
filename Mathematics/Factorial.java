public class Factorial{
    public static int factorial(int n){
        int fact=1;
        for(int i=2;i<=n;i++){
            fact=fact*i;
        }
        return fact;
    }

    public static void main(String[] args){
        int n=6;
        System.out.println("The factorial of the number "+ n +" is: "+factorial(n) );
    }
}
//Time complexity: Theta(n),Auxiliary Space:Theta(1)