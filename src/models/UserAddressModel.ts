import {UserGeoModel} from './UserGeoModel';

export interface UserAddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeoModel;
}
