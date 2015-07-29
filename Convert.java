
//For an input string "3f-67ggfh-yh" and k=3
//the output is 3-F67-GGF-HYH
class Convert{
	
	//str is the input string.
	//k is the number of chars in each group in the string separated by -
	public String convertString(String str, int k){
		int countChars = 0;
		StringBuffer newStr = new StringBuffer();
		for(int i=0; i<str.length();i++){
			if(str.charAt(i) != '-'){
				countChars++;
				newStr.append(str.charAt(i));
			}
		}

		int countHash = str.length() - countChars;
		int tempCount = k;

		StringBuffer s = new StringBuffer();

		for(int i = str.length()-1; i >= 0; i--){

		}
	}
}
