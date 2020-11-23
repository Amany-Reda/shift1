package shift.chiper;
import java.util.*;

public class ShiftChiper {

   
    public static void main(String[] args) {
     Scanner sc=new Scanner(System.in);
     Scanner sc1=new Scanner(System.in);
		int shift,shift1,i,n1 ,n;
		String plaintext;
		String ChiperText=""; 
       
                ////Encrypt
		System.out.println("Enter the plaintext");
		plaintext=sc.nextLine(); // enter the string value
		plaintext=plaintext.toLowerCase(); // convert plaintext to lowerCase
		n =plaintext.length(); // length of palintext
		char ch1[]=plaintext.toCharArray(); //put plaintext in array
		char ch3,ch4;  // use ch1 and ch3 to encrypt plaintext
		System.out.println("enter the value of shift to each litter in plaintext");
		shift=sc.nextInt(); //enter the integer value
		System.out.println();
               
		System.out.println("Encrypted text is");  //the follow code to encrypt the plainext
               
		for(i=0;i<n;i++)
		{
			if(Character.isLetter(ch1[i])) // if ch1 is letter //this function return boolean
			{
                            
				ch3= (char)(((int)ch1[i]+shift-97)%26+97); 
                                 //why 97? because in java the value of charc srart with 97  for example (a=97)(b=98)and so on
                                //convert ch[i] to enteger and do the operation and finally convert the result to char
		                System.out.println(ch1[i]+" = "+ch3); // print the character before encrypt and after encrypt
				ChiperText=ChiperText+ch3; //put the encryot character in this string during the loop
			}				
			else if(ch1[i]==' ') // if ch1 is space 
			{
				ChiperText=ChiperText+ch1[i]; //stil space
                                              
			}					
		}
		System.out.println( "the chipertext is: "+ ChiperText); // print the chiper text 
		System.out.println("_______________________");
                
                ////DECRYPT
                String chiper;
		String plain="";
                System.out.println("Enter the chipertext");
		chiper= sc1.nextLine();
                chiper=chiper.toLowerCase(); // convert chiper to lowerCase
                n1 =chiper.length(); // length of chipher
                char ch2[]=ChiperText.toCharArray(); // use ch2 and ch4 to decrypt
                System.out.println("enter the value of shift to each litter in chipher");
		shift1=sc1.nextInt(); //enter the integer value
		System.out.println("Decrypted text is"); //the follow code to decrypt the plainext
               

		for(i=0;i<n1;i++)
		{
                   
			if(Character.isLetter(ch2[i]))
			{
				if(((int)ch2[i]-shift)<97) //means the (index of chipertext - shift )= negative number
				{
					ch4=(char)(((int)ch2[i]-shift-97+26)%26+97);// increse 26+ negative number

				}
				else
				{
					ch4=(char)(((int)ch2[i]-shift-97)%26+97);
				}
                                System.out.println(ch2[i]+" = "+ch4);
				plain=plain+ch4;
			}	
			
			else if(ch2[i]==' ')
			{
				plain=plain+ch2[i];
			}								
		}
		System.out.println( "the plaintext is: "+ plain); // print the plain text 
		System.out.println("_______________________");
	
    }
    
}
