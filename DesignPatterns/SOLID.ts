/* 角色扮演游戏 */

// 1.单一职责原则 | Single responsibility principle ___________________________________

/* 厨师 */
class CookErrorClass {
  barbecue() { } // 烧烤
  eat() { } // 吃东西
}
/* 运动员 */
class AthconstesErrorClass {
  swim() { } // 游泳
  eat() { } // 吃东西
}

const cook_err = new CookErrorClass()
const cookEat_err = cook_err.eat()

const athconstes = new AthconstesErrorClass()
const athconstesEat = athconstes.eat()

// 存在问题多角色，没有复用重复代码，请思考类的上层抽象，在上层观测哪些需要单独抽象成单一职责。

/* 改造 */
class Cook {
  barbecue() { } // 烧烤
}

class Human {
  eat(people: any) { } // 吃东西
}
const cook = new CookErrorClass()
const human = new Human()
const cookEat = human.eat(cook)


// 2.开闭原则 | Open-Closed Principle ___________________________________

// description：对扩展开放、对修改关闭。要么继承要么注入，不轻易修改已经写好的类。

/* 城市 */
class CityError {
  go(content, type: string) {
    if (type === 'guangzhou') { }
    if (type === 'shenzheng') { }
    // ...没有修改关闭，使得类变得不稳定
  }
}

/* 改造 - 继承法 */
class CityEx {
  go(content) { }
}

class Guangzhou extends CityEx {
  go(content) { }
}
// 缺点改变父类方法，违背里氏替换原则

/* 改造 - 构造法 */
class City {
  protected _city
  theCity(city) {
    this._city = city
    return this
  }
  go(content) {
    this._city.go(content)
  }
}

class Shenzheng extends City {
  go(content) { }
}

const city = new City()
const shenzheng = new Shenzheng()
city.theCity(shenzheng).go('切换深圳地图')
// 这种实现很好的实现了对扩展开放，对修改关闭的原则。


// 3. 里氏替换原则 | Liskov Substitution Principle ___________________________________

// description：父类可以替换子类，并且替换后系统结果一致

// 定义一个 Weapon 类，用来表示武器
class Weapon {
  name: string; // 武器名称
  power: number; // 武器威力

  constructor(name: string, power: number) {
    this.name = name;
    this.power = power;
  }

  // 攻击方法
  attack() {
    console.log(`${this.name}攻击，造成${this.power}点伤害`);
  }
}

// 定义具体的武器类
class Handgun extends Weapon {
  constructor() {
    super("手枪", 10);
  }
}

class Rifle extends Weapon {
  constructor() {
    super("步枪", 20);
  }
}

class RocketLauncher extends Weapon {
  constructor() {
    super("火箭筒", 50);
  }
}
// 定义一个 Hero 类，用来表示英雄角色
class Hero {
  weapon: Weapon;

  constructor(weapon: Weapon) {
    this.weapon = weapon;
  }

  // 攻击方法
  attack() {
    this.weapon.attack();
  }
}
// 创建英雄对象和几个武器对象
const hero = new Hero(new Handgun());
const rifle = new Rifle();
const rocketLauncher = new RocketLauncher();

// 让英雄使用不同的武器进行攻击
hero.attack(); // 手枪攻击，造成10点伤害
hero.weapon = rifle;
hero.attack(); // 步枪攻击，造成20点伤害


// 4. 接口分离原则 | Interface Segregation Principle ___________________________________

// 单个接口方法越少越好，不应该被迫实现用不上的方法。
interface Attackable {
  attack(): void;
}

interface Defendable {
  defend(): void;
}

class Player implements Attackable, Defendable {
  attack() {
    console.log("玩家在攻击...");
  }

  defend() {
    console.log("玩家在防御...");
  }
}

class Obstacle implements Defendable {
  defend() {
    console.log("障碍在防御攻击...");
  }
}

function defend(defender: Defendable) {
  defender.defend();
}

const player = new Player();
defend(player);

const obstacle = new Obstacle();
defend(obstacle);

// 5. 依赖倒置原则 | Dependency Inversion Principal ___________________________________

// description：高阶模块不应该依赖低阶模块，两者都应该依赖与抽象；

interface Notice {
  send(): void
}

class NPC {
  death(notice: Notice) {
    notice.send()
  }
}