// 90. Write a JavaScript program to nest a given flat array of objects linked to one another recursively. 

const getUserChildren = (id, arr) => {
	let children = [];
	arr.map((obj) => {
		if(obj.parent_id === id){
			obj["children"] = getUserChildren(obj.id, arr);
			children.push(obj);
		}
	});
	return children;
};

const nestLinkedObjects = (arrOBJ) => arrOBJ.map((obj) => {
	return {
		id : obj.id,
		parent_id : obj.parent_id,
		children : getUserChildren(obj.id, arrOBJ)
	};
});

const comments = [
    { id: 1, parent_id: null },
    { id: 2, parent_id: 1 },
    { id: 3, parent_id: 1 },
    { id: 4, parent_id: 2 },
    { id: 5, parent_id: 4 }
];

console.log(nestLinkedObjects(comments));
