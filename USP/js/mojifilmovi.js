var brojFilmova = 5;
var niz = new Array('<div class="row sadrzaj" id="1"><div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/redsparrow.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">IZDAJA</h2><h5>Trajanje: 135min</h5><h5>Reziser: Francis Lawrence</h5><h5>Glumci:</h5><ul type="square"><li><h5>Jennifer Lawrence</h5></li><li><h5>Joel Edgerton</h5></li><li><h5>Matthias Schoenaerts</h5></li><li><h5>Charlotte Rampling</h5></li></ul><a href="izdaja.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="39%" src="https://www.youtube.com/embed/PmUL6wMpMWw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>','<div class="row sadrzaj" id="2"><div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/deadpool.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">DEADPOOL 2</h2><h5>Trajanje: 110min</h5><h5>Reziser: David Leitch</h5><h5>Glumci:</h5><ul type="square"><li><h5>Ryan Reynolds</h5></li><li><h5>Josh Brolin</h5></li><li><h5>Morena Baccarin</h5></li><li><h5>Julian Dennison</h5></li></ul><a href="deadpool2.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="37%" src="https://www.youtube.com/embed/20bpjtCbCz0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>','<div class="row sadrzaj" id="3"><div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/laracroft.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">TOMB RAIDER</h2><h5>Trajanje: 140min</h5><h5>Reziser: Roar Uthaug</h5><h5>Glumci:</h5><ul type="square"><li><h5>Alicia Vikander</h5></li><li><h5>Dominic West</h5></li><li><h5>Walton Goggins</h5></li><li><h5>Daniel Wu</h5></li></ul><a href="tombraider.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="37%" src="https://www.youtube.com/embed/gs8fXmT2n1g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>','<div class="row sadrzaj" id="4"><div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/taken.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">OTETA</h2><h5>Trajanje: 105min</h5><h5>Reziser: Pierre Morel</h5><h5>Glumci:</h5><ul type="square"><li><h5>Liam Neeson</h5></li><li><h5>Maggie Grace</h5></li><li><h5>Leland Orser</h5></li><li><h5>Famke Janssen</h5></li></ul><a href="oteta.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="39%" src="https://www.youtube.com/embed/kZ02_Uzf7So" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>','<div class="row sadrzaj" id="4"><div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/vuk-sa-vol-strita.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">Vuk sa Vol Strita</h2><h5>Trajanje: 182min</h5><h5>Reziser:  Martin Scorsese</h5><h5>Glumci:</h5><ul type="square"><li><h5>Leonardo DiCaprio</h5></li><li><h5>Jonah Hill</h5></li><li><h5>Margot Robbie</h5></li><li><h5>Matthew McConaughey</h5></li></ul><a href=""><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="37%" src="https://www.youtube.com/embed/iszwuX1AK6A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>');function dodaj(broj) {
	var trenutno;	if ('localStorage' in window && window.localStorage !== null) {
		trenutno = localStorage.getItem(broj);
		if (trenutno==null) {
			localStorage.setItem(broj,1);
		} else {
			localStorage.setItem(broj,trenutno+1);
		}
	}
	alert("Uspešno dodat");}
function izlistaj() {
	var i;
	var podaci;
	var postavi="";
	if ('localStorage' in window && window.localStorage !== null) {
		for (i=0;i<brojFilmova;i++) {
			podaci=localStorage.getItem(i);
			if (podaci!=null) {
				postavi+="<hr>";
				postavi+=niz[i];
			}
		}
		document.getElementById('popuniMojimFilmovima').innerHTML=postavi;
	}
}