import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { Stella } from './stella.js'

// voeg hier jouw eigen resources toe
const Resources = {
    Stella: new ImageSource('images/stella-stand.png'),
    StellaWalk: new ImageSource('images/stella-walking.png'),
    Icy: new ImageSource('images/icyy.png'),
    Background: new ImageSource('images/background.jpg'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }