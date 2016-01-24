function Subject(){
	this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function(observer){
	this.observers.Add(observer);
}

Subject.prototype.RemoveObserver = function(observer){
	this.observers.RemoveIndexAt(this.observers.IndexOf(observer,0));
}

Subject.prototype.Notify = function(context){
	var observerCount = this.observers.Count();
	for(var i = 0 ; i < observerCount ; i++){
		this.observers.Get(i).Update(context);
	}
}

//The Observer
function Observer(){
	this.Update = function(){
		//...
	};
}