public class FactorialRecursive{
    public static int factorialRecursive(int n){
        if(n==0){
            return 1;
        }
        return n*factorialRecursive(n-1);
    }
    public static void main(String[] args){
        int n=5;
        System.out.println("The factorial of the number "+n+" is: "+factorialRecursive(n));
    }
}
//Time complexity: Theta(1)+ Theta(n-1),Auxiliary Space:Theta(n)