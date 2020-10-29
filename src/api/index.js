const PRIMARY_SCHOOLS_DATASET = 'locaties-basisscholen-gent';
const SECONDARY_SCHOOLS_DATASET = 'locaties-secundaire-scholen-gent';

const fetchSchoolLocationsJSON = (selector) => fetch(`https://data.stad.gent/api/records/1.0/search/?dataset=${selector}&q=&rows=1000`)
    .then(response => response.json())

export const fetchPrimarySchools = (callback) => {
    fetchSchoolLocationsJSON(PRIMARY_SCHOOLS_DATASET)
        .then(({ records }) => callback(records));
}

export const fetchSecondarySchools = (callback) => {
    fetchSchoolLocationsJSON(SECONDARY_SCHOOLS_DATASET)
        .then(({ records }) => callback(records));
}

