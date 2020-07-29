const data = [{
        name: 'John Doe',
        age: 40,
        gender: 'male',
        lookingfor: 'female',
        location: 'Greensborough NH',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    {
        name: 'Jen Smith',
        age: 20,
        gender: 'female',
        lookingfor: 'male',
        location: 'Reno NV',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        name: 'William Johnson',
        age: 55,
        gender: 'male',
        lookingfor: 'female',
        location: 'Concord MA',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    }
];

const profiles = profileIterator(data);

//Call first profile

nextProfile()

//Next Event

document.getElementById('next').addEventListener('click', nextProfile)


//Next Profile Display

function nextProfile() {
    const currentProfile = profiles.next().value

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML =
            `<ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
            </ul>`

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        //No More Profiles
        window.location.reload();

    }

}

//Profile Iterator

function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}