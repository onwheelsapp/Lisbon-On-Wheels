import { TPOI } from '../types/types';

export const POIProperties: (keyof TPOI)[] = [
  'id',
  'category',
  'location',
  'name',
  'street',
  'number',
  'postalCode',
  'city',
  'country',
  'locationEmail',
  'website',
  'comments',
  'doorWidth',
  'numSteps',
  'hasRamp',
  'hasTurnpoint',
  'atmHeight',
  'counterHeight',
  'adaptedToiletAccessibility',
  'adaptedToiletDoorWidth',
  'adaptedToiletSpaceSide',
  'adaptedToiletSpaceFront',
  'adaptedToiletNarrowestPointFromEntrance',
  'hasPaidToilet',
  'hasBabyChangingTable',
  'liftWidth',
  'liftDepth',
  'hasDisabledParkingSpaces',
  'parkingSpaces',
  'parkingLength',
  'parkingWidth',
  'parkingAngle',
  'surface',
  'isUnmeasurable',
  'unmeasurableReasonOther',
  'openingHours',
  'kerbHeight',
  'routeReference',
  'slope',
  'tactilePaving',
  'wheelchairAccessible',
  'foodType',
  'braille',
  'hearingLoop',
  'numAccessiblePlaces'
];

export const POIPropertyName: TPOIPropertyName = {
  id: 'ID',
  category: 'Category',
  location: 'Location',
  subCategory: 'Sub category',
  name: 'Name',
  street: 'Street',
  number: 'Number',
  postalCode: 'Postal code',
  city: 'City',
  country: 'Country',
  locationEmail: 'Location email',
  userEmail: 'User email',
  website: 'Website',
  comments: 'Comments',
  doorWidth: 'Door width',
  numSteps: 'Number of steps',
  stepsTotalHeight: 'Steps total height',
  hasRamp: 'Has a ramp',
  hasTurnpoint: 'Has a turnpoint',
  atmHeight: 'ATM height',
  counterHeight: 'Counter height',
  adaptedToiletAccessibility: 'Adapted toilet accessibility',
  regularToiletAccessibility: 'Regular toilter accessibilty',
  adaptedToiletDoorWidth: 'Adapted toilet door width',
  adaptedToiletSpaceSide: 'Adapted toilet space side',
  adaptedToiletSpaceFront: 'Adapted Toilet space front',
  adaptedToiletNumHandrails: 'Adp. toilet amount of handrails',
  adaptedToiletNarrowestPointFromEntrance: 'Adp. toilet narrowest point from entrance',
  toiletAccessibility: 'Toilet accessibility',
  hasPaidToilet: 'Has paid toilet',
  hasBabyChangingTable: 'Has baby changing table',
  hasAdultChangingTable: 'Has adult changing table',
  liftWidth: 'Lift width',
  liftDepth: 'Lift depth',
  liftDoorWidth: 'Lift door width',
  hasDisabledParkingSpaces: 'Had disabled parking spaces',
  parkingSpaces: 'Parking spaces',
  parkingLength: 'Parking length',
  parkingWidth: 'Parking width',
  parkingAngle: 'Parking angle',
  surface: 'Surface',
  isUnmeasurable: 'Is unmeasurable',
  unmeasurableReason: 'Unmeasurable reason',
  unmeasurableReasonOther: 'Unmeasurable reason other',
  openingHours: 'Opening hours',
  widthFreeSpace: 'Width free space',
  kerbHeight: 'Kerb height',
  adjustableHeight: 'Adjustable height',
  parkingAccess: 'Parking access',
  parkingArea: 'Parking area',
  routeReference: 'Route reference',
  isAutomaticDoor: 'Automatic door',
  slope: 'Slope',
  tactilePaving: 'Tactile paving',
  submittedBy: 'Submitted by',
  wheelchairAccessible: 'Wheelchair accessible',
  foodType: 'Food type',
  braille: 'Braille',
  hearingLoop: 'Hearing loop',
  numAccessiblePlaces: 'Amount of accessible places',
  isVegetarian: 'Is vegetarian',
  isVegan: 'Is vegan',
  communiThingsId: 'CommuniThings ID'
};

type TPOIPropertyName = {
  [key: string]: string;
};