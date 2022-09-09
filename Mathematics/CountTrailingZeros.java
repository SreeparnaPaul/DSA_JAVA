//Count trailing Zeros in factorial

public class CountTrailingZeros{
    public static int countTrailingZeros(int n){
        int countTrailingZeros=0;
        for(int i=5;i<=n;i=i*5){
          countTrailingZeros= countTrailingZeros + n/i ;
        }
        return countTrailingZeros;
    }
    public static void main(String[] args){
        int n=10;
        System.out.println("The number of zeros in factorial "+n+ " is: "+countTrailingZeros(n));
    }
}
//Time complexity:Theta(logn)