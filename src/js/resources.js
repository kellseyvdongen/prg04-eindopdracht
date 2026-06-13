import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { Stella } from './stella.js'

// voeg hier jouw eigen resources toe
const Resources = {
    Stella: new ImageSource('images/stella-stand.png'),
    StellaWalk: new ImageSource('images/stella-walk.png'),
    StellaShoot: new ImageSource('images/stella-shoot.png'),
    StellaHurt: new ImageSource('images/stella-hit.png'),
    Icy: new ImageSource('images/icyy.png'),
    Darcy: new ImageSource('images/darcy.png'),
    Stormy: new ImageSource('images/stormy.png'),
    Giant: new ImageSource('images/giant.png'),
    Background: new ImageSource('images/background.png'),
    Bullet: new ImageSource('images/bullet.png'),
    HealthPack: new ImageSource('images/healthpack.png'),
    StellaWalking: new ImageSource('images/stella-walkin.png'),
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }