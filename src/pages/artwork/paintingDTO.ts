
export class paintingDTO {

  constructor(public _painting: any){
    this._painting = JSON.parse(_painting);
  }

  painting(){
    return this._painting;
  }

  id(){
    return this._painting.id;
  }

  primaryImage(){
    return this._painting.primaryImage;
  }

  additionalImages(){
    return this._painting.additionalImages;
  }

  constituents(){
    return this._painting.constituents;
  }

  department(){
    return this._painting.department;
  }

  title(){
    return this._painting.title;
  }

  culture(){
    return this._painting.culture;
  }

  period(){
    return this._painting.period;
  }

  dynasty(){
    return this._painting.dynasty;
  }

  reign(){
    return this._painting.reign;
  }

  artistRole(){
    return this._painting.artistRole;
  }

  artistPrefix(){
    return this._painting.artistPrefix;
  }

  artistDisplayName(){
    return this._painting.artistDisplayName;
  }

  artistDisplayBio(){
    return this._painting.artistDisplayBio;
  }

  artistSuffix(){
    return this._painting.artistSuffix;
  }

  artistAlphaSort(){
    return this._painting.artistAlphaSort;
  }

  artistNationality(){
    return this._painting.artistNationality;
  }

  artistEndDate(){
    return this._painting.artistEndDate;
  }

  objectDate(){
    return this._painting.objectDate;
  }

  objectBeginDate(){
    return this._painting.objectBeginDate;
  }

  objectEndDate(){
    return this._painting.objectEndDate;
  }

  medium(){
    return this._painting.medium;
  }

  artistBeginDate(){
    return this._painting.artistBeginDate;
  }

  dimensions(){
    return this._painting.dimensions;
  }

  creditLine(){
    return this._painting.creditLine;
  }

  geographyType(){
    return this._painting.geographyType;
  }

  city(){
    return this._painting.city;
  }

  state(){
    return this._painting.state;
  }

  county(){
    return this._painting.county;
  }

  region(){
    return this._painting.region;
  }

  excavation(){
    return this._painting.excavation;
  }

  river(){
    return this._painting.river;
  }

  rightsAndReproduction(){
    return this._painting.rightsAndReproduction;
  }

  linkResource(){
    return this._painting.linkResource;
  }

  repository(){
    return this._painting.repository;
  }

  objectURL(){
    return this._painting.objectURL;
  }

  tags(){
    return this._painting.tags;
  }

}
