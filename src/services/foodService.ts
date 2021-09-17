import { Injectable } from '@angular/core';
import Food from '../types/food' ;

@Injectable({
    providedIn: 'root'
})
export class FoodService{
    listFood: Food[] = [
        {
            id: 1,
            nom: 'Pain au chocolat',
            categorie: 'Viennoiserie',
            lienImage: 'https://file1.topsante.com/var/topsante/storage/images/media/images/galeries/le-pain-au-chocolat-taille-xxs/8660448-1-fre-FR/Le-pain-au-chocolat-Taille-xxs.jpg?alias=width1024',
            description: 'Pain au chocolat matsiro be sady misy vitamine ary calcium.',
            prix: 1000
        },
        {
            id: 2,
            nom: 'Vin blanc', 
            categorie: 'Vin', 
            lienImage: 'https://www.tempsgourmand.fr/1668-large_default/vin-blanc-naturel-75cl.jpg',
            description: 'Vin blanc naturel nafarana avany andafy amin\'ny kalitao tsara indrindra.',
            prix: 25000
        },
        {
            id: 3,
            nom: 'Beignet de banane', 
            categorie: 'Patisserie', 
            lienImage: 'https://www.nahandro.com/wp-content/uploads/2015/12/beignets-de-banane.jpg', 
            description: 'Mofo akondro vao mafana, mahavoky tsara ho anao sy ny fianakavianao.',
            prix: 200
        },
        {
            id: 4,
            nom: 'Pizza au thon',
            categorie: 'Pizza',
            lienImage: 'https://www.notretemps.com/cache/com_zoo_images/72/pizza-thon_8e9497ec67024236e829a5ec5e2155da.jpg',
            description: 'Une pizza plutôt spéciale qui est associée à du thon.',
            prix: 10000
        }
    ] ;

    getFoodById(id:number){
        return this.listFood.find(x => x.id == id) ;
    }
}