function sortlist(list) {
	var temp;
	for (var i = 0; i < list.length - 1; i++) {
		for (var j = 0; j < list.length - 1 - i; j++) {
			if (list[j] > list[j + 1]) {
				temp = list[j + 1];
				list[j + 1] = list[j];
				list[j] = temp;
			}
		}
	}
}
