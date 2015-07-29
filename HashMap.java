//way to iterate through a HashMap
public void printmap(Map map){
	Iterator it = map.entrySet().iterator();
	while(it.hasNext()){
		Map.Entry pair = (Map.Entry)it.next();
		System.out.println();
		it.remove();
	}
}

public void printmap(Map map){
	for(Map.Entry<String, Object> entry : map.entrySet()){
		String key = entry.getKey();
		Object value = entry.getValue();
	}
}