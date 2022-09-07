import Hello from "./Hello";
import Image from "./Image";

function First(props) {
  return (
    <div className="red">
      <Image height={2} width={0} person={{ name: "Js", height: 23 }} />
      <Image height={2} person="Js" />
      <Image {...props} />
      <Image size={34} border={452} college={"Some"} />
      <Hello>
        <p className="hi">Para tag</p>
      </Hello>

      <Hello>
        <h1 className="hi">Next h1</h1>
      </Hello>

      <Hello>
        <section className="hi">
          <p>ertioneroin</p>
        </section>
      </Hello>
      <h1>Hi there </h1>
      <p>Hello </p>
    </div>
  );
}

// const props = {
//   width: 243,
//   height: 2,
//   person:'Js'
// size: 34,

//  };

// const props1 = { ...props }

// props1.name = 'Some name';

// props1 = {
//   width: 243,
//   height: 2,
//   person: "Js",
//   name:'Some name'
// };

// const props2 = { ...props }

// props2.age=234

// props.width;

// const { width =20} = props

// width:width // width

// console.log(width)

export default First;
