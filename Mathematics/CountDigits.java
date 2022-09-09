public class CountDigits{
    public static Long countDigits(Long n){
        Long result=0L;
        while(n>0){
            n=n/10;
            result++;
        }
        return result;
    }


    public static void main(String[] args){
        Long number=67890435526L;
        System.out.println("Number of digits present in "+number+" is: "+countDigits(number));
    }
}