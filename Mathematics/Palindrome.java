public class Palindrome{
    public static Boolean palindrome(Long number){
        Long reverse=0L;
        Long temp=number;
        while(temp!=0){
            Long lastDigit=temp%10;
            reverse=reverse*10+lastDigit;
            temp=temp/10; 
        }
        return (reverse==number);
    }
    public static void main(String[] args){
        Long n=121L;
        System.out.println("The "+ n + " number is Palindrome: "+palindrome(n));

    }
}