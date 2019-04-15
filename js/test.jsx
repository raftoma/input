import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';
import Brr from './Brr.jsx';
import _ from "lodash";
// import ScrollButton from './scroll.jsx';

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// class Hello extends React.Component {
//     render() {
//         return (
//             <h1>Hello {this.props.name}</h1>
//         )
//     }
// }

class InputDisable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iconName: 'balance scale',
      num1: '',
      num2: '',
      num3: '',
      color: 'black'
    }
  }

  handleChange1 = (e) => {
    this.setState({
      num1: e.currentTarget.value
    })
  };

  handleChange2 = (e) => {
    this.setState({
      num2: e.currentTarget.value
    })
  };

  handleChange3 = (e) => {
    this.setState({
      num3: e.currentTarget.value
    })
  };

  // handleClick = (e) => {
  //     console.log('Click', this.state.color)
  //     this.setState({
  //         color: 'violet'
  //     })
  // }

  handleClick = (e) => {
    console.log('Click', this.state.color)
    let color = this.state.color === 'black' ? 'red' : 'black';
    this.setState({
      color: color
    })
  };


  componentWillMount() {
    console.log('componentWillMount')
    this.setState({
      num2: 200,
      locked: 'third'
    })
  }

  // handleClickScroll = (e) =>{
  //   ReactDOM.findDOMNode(this).scrollTop = 0;
  //   console.log('weszło');
  //   console.log(this.myRef);
  // }

  goToTop() {
    try {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
      console.log('Went to top');
    } catch (error) {
      window.scrollTo(0,0);
    }
  }


  componentDidMount() {
    console.log('ComponentDidMount')
    // console.log('Icon', this.state.iconName),
    //     setTimeout(() => {
    //         this.setState({
    //             iconName: "book"
    //         })
    //     }, 3000)
    //
    // setTimeout(() => {
    //     console.log('Icon', this.state.iconName),
    //         this.setState({
    //             iconName: "bullseye"
    //         })
    // }, 5000)


  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate')
  }

  render() {

    // function start(counter) {
    //     if (counter < 10) {
    //         setTimeout(function () {
    //             counter++;
    //             console.log(counter);
    //             start(counter);
    //         }, 1000);
    //     }
    // }
    // start(0);


    const user = {
      name: 'Mark',
      age: '24',
      hobbies: ['Sports', 'Books', 'Movies']
    };

    const options = [
      {key: 'rest value 1', text: 'rest value 1', value: 'rest value 1'},
      {key: 'best value 2', text: 'best value 2', value: 'best value 2'},
      {key: 'test value 3', text: 'test value 3', value: 'test value 3'},
      {key: 'test value 4', text: 'test value 4', value: 'test value 4'},
      {key: 'test value 5', text: 'test value 5', value: 'test value 5'},
      {key: 'test value 6', text: 'test value 6', value: 'test value 6'},
      {key: 'test value 7', text: 'test value 7', value: 'test value 7'},
      {key: 'test value 8', text: 'test value 8', value: 'test value 8'},
      {key: 'test value 9', text: 'test value 9', value: 'test value 9'},
      {key: 'test value 10', text: 'test value 10', value: 'test value 10'},
      {key: 'test value 11', text: 'test value 11', value: 'test value 11'},
      {key: 'test value 12', text: 'test value 12', value: 'test value 12'}
    ];

    return (
      <div ref={this.myRef}>
        <br/>
        <center><Icon name={this.state.iconName} size={'massive'}/></center>

        <br/>

        <Input name='first'
               onChange={this.handleChange1} value={this.state.num1}
               disabled={this.state.disabled === 'first'}
               icon={<Icon name={this.state.locked === 'first' ? 'lock' : 'unlock'} link
                           onClick={() => {
                             this.setState({
                               locked: 'first'
                             })

                           }}

               />}
        />

        x

        <Input name='second'
               onChange={this.handleChange2} value={this.state.num2}
               disabled={this.state.disabled === 'second'}
               icon={<Icon name={this.state.locked === 'second' ? 'lock' : 'unlock'} link
                           onClick={() => {
                             this.setState({
                               locked: 'second'
                             })

                           }}

               />}
        />

        =

        <Input name='third'
               onChange={this.handleChange3}
               disabled={this.state.disabled === 'third'}
               icon={<Icon name={this.state.locked === 'third' ? 'lock' : 'unlock'} link
                           onClick={() => {
                             this.setState({
                               locked: 'third'
                             })

                           }}

               />}
        />

        <br/><br/>

        <center>

          <Button style={{color: this.state.color}}

                  onClick={this.handleClick}

          >Click Here</Button>


          <br/><br/>

          <Dropdown
            placeholder='Select...'
            icon='search'
            search
            selection
            options={options}
          />

        </center>

        <h1>{isNaN(Number(this.state.num1)) || isNaN(Number(this.state.num2)) ? 'Nie liczba' : Number(this.state.num1) * Number(this.state.num2)}</h1>
        <br/>
        <Brr name={user.name} age={user.age} hobbies={user.hobbies[2]}/>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus inventore, officiis quos
          recusandae repellendus. Ad aliquam animi aperiam, aspernatur assumenda aut autem commodi, consectetur deserunt
          dicta dignissimos dolorem doloremque ducimus et ex exercitationem fuga harum impedit itaque labore modi
          molestias mollitia necessitatibus non officia omnis pariatur quasi quisquam ratione repellat rerum sed sit
          ullam velit veniam voluptatem voluptatum. Asperiores aspernatur, blanditiis corporis, dolores enim illum
          maiores nostrum obcaecati porro quidem quis quisquam sint soluta sunt vero! Alias dicta ea magni natus,
          officiis quisquam rem repellendus repudiandae saepe similique, vero voluptatum. Consequuntur deserunt dolor
          eius incidunt natus quis repellendus sint! Aperiam, atque debitis dolore, ea molestias optio pariatur qui rem
          suscipit tempore tenetur, totam vero voluptas. A asperiores aspernatur atque blanditiis consectetur cum cumque
          dicta dolore, doloremque dolorum ducimus eius eligendi, eum exercitationem harum magnam minus odio officia
          optio quia quidem quis velit voluptatem! Aspernatur aut commodi eligendi quos reprehenderit tempore vel?
          Accusamus aspernatur aut consequatur consequuntur delectus dignissimos dolorem eaque eligendi enim error eum
          exercitationem explicabo facere id labore minus nesciunt obcaecati provident quisquam ratione rerum sequi ut,
          vero. Id illo modi sint. Aliquid animi deleniti dolor eaque eius est, explicabo illo, nam natus officiis quae
          quaerat quas quidem sequi unde ut voluptatibus! Accusantium aliquid blanditiis consectetur delectus distinctio
          eos exercitationem fugiat itaque labore laboriosam obcaecati quod quos repellat reprehenderit, similique
          soluta tempore temporibus totam vel veritatis. Aliquam aperiam, consectetur cumque dolore dolores ipsam nihil
          quo temporibus. Ab culpa cupiditate deserunt doloribus ea ipsa laborum, maxime neque nesciunt placeat quas
          totam ullam voluptate. Consequuntur esse fuga laboriosam nihil quaerat? Dolores ea enim illum magnam molestiae
          necessitatibus nostrum obcaecati sunt ut vitae? Aliquam culpa hic inventore molestiae provident quos
          voluptate. Atque culpa impedit magnam molestias quod. Architecto autem magnam quibusdam! Debitis delectus
          distinctio nulla porro quibusdam sapiente sequi tenetur voluptatibus. Consectetur consequatur nulla
          perspiciatis quia rerum sequi veniam voluptas? Aliquid dignissimos dolores dolorum ducimus eaque et facilis id
          itaque magnam maxime nemo obcaecati pariatur, provident quis ratione, repellendus soluta veritatis! Ab
          accusantium, alias aliquid animi, autem consectetur cum cumque debitis dignissimos dolor doloremque doloribus,
          earum enim eos explicabo illum incidunt ipsa iusto labore laborum maxime necessitatibus nesciunt odio officia
          omnis quas quia quo reiciendis rem repellat rerum saepe sint sit tempore unde voluptate voluptatibus. Aliquid
          aspernatur assumenda blanditiis cupiditate dolores et eum ipsa itaque magni molestiae, nam numquam
          perspiciatis quod, rem vel velit voluptates. Accusantium ad eaque fugit nam nihil veniam! Eligendi error
          fugiat fugit saepe sunt tenetur totam vitae. Delectus ducimus illum iste laudantium maxime neque nostrum
          repellendus sed similique. A aliquam assumenda ea nam praesentium. Consequatur cupiditate dicta iste modi
          necessitatibus perferendis quas quo sapiente tempora temporibus. At, culpa illum laborum repellat vero
          voluptas voluptates! Autem corporis eaque fuga illo impedit incidunt minima minus nemo pariatur perferendis
          quam, quod rem repudiandae sed tempora veniam voluptate. A accusantium animi asperiores, consequatur
          consequuntur dolorum eaque eius et facilis fugit id in ipsam ipsum labore laborum molestiae nam necessitatibus
          numquam officia officiis omnis optio, pariatur praesentium provident quibusdam quo quos recusandae rerum saepe
          sit soluta suscipit temporibus ullam vero voluptas voluptatem voluptatum. Blanditiis consequuntur corporis
          deserunt esse expedita facilis hic ipsum placeat praesentium, quaerat quis quod repudiandae sunt totam vel.
          Aut autem consequuntur eos minus mollitia, nam nesciunt nobis non odit placeat porro quae quas, quia repellat
          rerum sed, similique totam ullam veniam vitae! Aliquam asperiores autem, excepturi fugit ipsa modi optio
          perferendis placeat repellat saepe soluta velit veniam! A est et ipsam laborum, mollitia placeat. Accusamus
          aperiam atque dolor iste nobis sit ut vitae voluptatem? Consequuntur cumque dolore facere ipsam magnam
          perferendis perspiciatis praesentium quae, quidem quo repudiandae suscipit tenetur? Ab ad adipisci, aperiam
          atque autem beatae dolores expedita laboriosam nisi odio praesentium quam qui voluptatum! Ab accusamus, animi
          at, autem distinctio dolores id iusto odit perferendis porro possimus qui voluptatum? Commodi doloribus maxime
          perferendis sit tempore vero, vitae? A delectus deleniti deserunt dolores, doloribus ea eum ex, expedita illo
          impedit magni minus mollitia optio, perferendis praesentium reprehenderit sed? Consequuntur dolores ex
          expedita magni quaerat ratione temporibus veniam! A amet, autem commodi consectetur culpa cumque deleniti
          dignissimos distinctio dolorum ducimus eius eligendi error est ex excepturi fuga harum iusto labore laboriosam
          laudantium magni nam natus nesciunt nihil nisi nulla obcaecati officia pariatur praesentium quia ratione
          recusandae reiciendis rerum sint ullam vel veritatis. Dolores in minus non omnis placeat rem sunt tempora. Ad
          architecto consequuntur corporis cumque, distinctio dolore doloribus dolorum eligendi eos esse et fuga hic id
          in iusto laborum molestiae non perferendis quasi qui repellendus reprehenderit soluta veniam vero voluptatum.
          Amet assumenda beatae commodi culpa, cupiditate debitis delectus dignissimos distinctio fuga in ipsa ipsam,
          ipsum laboriosam laborum nam non placeat quos ratione rem repellendus sunt suscipit tempore unde ut vero,
          voluptatem voluptates! Alias animi architecto asperiores dolorum enim eos esse, hic maxime officiis velit!
          Accusantium aspernatur beatae cupiditate debitis dicta dolore doloremque enim eos esse est eum ex excepturi
          exercitationem expedita fuga fugiat fugit illo, ipsum iusto magni maiores nulla obcaecati omnis optio possimus
          quae quas quasi, quia quo recusandae sapiente suscipit tenetur unde, ut veniam voluptatem voluptates.
          Accusamus cum deserunt distinctio earum facere, ipsa libero minus nisi nulla officiis similique soluta tempora
          temporibus. Accusantium, consequatur dolorum ea enim, eum eveniet ex exercitationem illum magni modi nam
          nostrum placeat quae ratione repellat sunt tenetur vero. Asperiores dicta eligendi error facilis laudantium
          libero officiis porro repellendus! Ab beatae distinctio enim facilis incidunt ipsum iste itaque labore libero
          magnam minima nobis obcaecati omnis quam quibusdam quidem rem, repudiandae, rerum, sequi sunt? Consequuntur
          earum excepturi illo incidunt magni mollitia odit sunt. Aliquam animi aperiam asperiores assumenda autem,
          corporis dicta dolor ea earum error eveniet harum illum ipsa ipsam iste iure maiores maxime minus molestias
          neque nesciunt non odio pariatur porro quam, rem repudiandae temporibus ut velit veniam! Adipisci aspernatur
          aut beatae consequatur cum cumque delectus deleniti dignissimos, ea, earum enim facilis fugiat fugit iure
          laborum laudantium magnam molestias odio optio placeat praesentium provident quaerat quia quidem quis rerum
          sint sit ullam unde vero? Architecto cumque debitis eum fugit illum nemo rem? Architecto atque eum ipsum
          officia possimus repellat sed ullam! Ab accusantium alias aliquid aut dicta dolor dolore eius eligendi error,
          hic id illo ipsum itaque iusto magnam magni necessitatibus numquam perferendis perspiciatis quasi quidem rem
          repudiandae rerum sint vel veritatis voluptatibus. Accusantium adipisci alias aperiam aut dicta distinctio
          ducimus, earum eligendi, id labore, nihil odit perspiciatis porro possimus quaerat quasi repellendus
          repudiandae tempora temporibus ut. Aliquam beatae dicta dolor dolore, ducimus earum, eos est exercitationem,
          expedita fugit incidunt iste iure laborum minima nemo neque nihil perferendis perspiciatis quas quasi
          reiciendis reprehenderit saepe sapiente tenetur velit? Amet aspernatur atque aut cum cumque dicta ea eaque hic
          iusto minus molestias nostrum perspiciatis quam, quasi quod reiciendis reprehenderit sequi suscipit, totam
          ullam unde vel veniam voluptatum. Adipisci eos impedit molestiae? Accusamus ad alias aliquam architecto at
          autem consequatur cupiditate debitis deleniti distinctio dolores eius enim eum eveniet id illo illum, iusto
          magni, nisi nobis obcaecati odit officiis omnis optio possimus quas, qui quisquam ratione soluta tempora
          tempore temporibus tenetur ullam ut vel vitae voluptate. Ab ad adipisci alias blanditiis commodi consequuntur
          eaque fugiat illo maiores maxime molestiae mollitia natus nemo omnis optio perferendis placeat provident
          quaerat quis recusandae, sint suscipit tempora ullam velit, voluptate. Aliquam consectetur eius eos explicabo
          illum laudantium optio quidem, sint. Accusamus aliquam aperiam commodi consequuntur, facere suscipit? Enim est
          expedita ipsa natus nisi nobis optio quis reprehenderit voluptatibus voluptatum? Asperiores inventore non
          quas. Aliquam laudantium, libero magnam minus omnis praesentium velit voluptate voluptatum. Accusantium alias,
          aperiam beatae dignissimos eum impedit labore mollitia nisi odio placeat porro quidem quis repellat voluptas
          voluptate! A atque autem consectetur ducimus, et eveniet illum labore neque obcaecati odit quibusdam quis
          rerum unde, veritatis voluptatum. Commodi consectetur doloremque, error eum ex hic maxime nam quo sed
          suscipit. Aperiam architecto deleniti dolores dolorum ea fugiat labore laboriosam maiores quidem quod. Fugiat
          iure laborum molestias neque sequi unde veritatis voluptatem? Alias assumenda cum distinctio eius facilis id
          in numquam officiis omnis qui quibusdam reprehenderit suscipit, tenetur voluptatibus voluptatum? A aperiam
          aspernatur consequuntur culpa, doloribus esse eum fuga iusto magni molestiae nam nemo porro praesentium,
          provident quis recusandae rerum, veniam. Aperiam at blanditiis consequuntur culpa facilis iusto odio,
          perspiciatis velit vitae! Cum expedita ipsa iusto laboriosam magni nulla, officiis optio perspiciatis possimus
          temporibus? Accusamus architecto eaque, eum incidunt maiores nostrum odio perspiciatis sed suscipit. Amet
          assumenda at consequuntur cumque, distinctio doloribus eaque enim eum facilis harum incidunt inventore
          laboriosam maxime numquam omnis placeat praesentium quae qui quibusdam quidem quis rem repellendus
          reprehenderit sed tempore ullam voluptatibus! Ad aliquam assumenda at aut dignissimos dolorem doloremque et
          eum expedita explicabo facilis nemo nihil perspiciatis quae recusandae reiciendis repellendus reprehenderit
          sint, ullam voluptas. Accusantium, deserunt dolore eos et explicabo facere incidunt iusto labore nisi optio
          porro quae quasi quibusdam recusandae reiciendis repellendus repudiandae similique sit tempora, temporibus
          ullam velit voluptas? Accusantium aliquam aspernatur corporis deleniti esse excepturi nobis optio quo
          repudiandae sunt. Aliquam delectus eaque eos eveniet illo laborum minima quisquam sed totam vel. Dolor
          inventore possimus totam vel. Accusantium delectus dolor doloremque explicabo fugit, iure voluptate! Aliquam
          corporis cupiditate eligendi explicabo hic ipsam libero molestiae nemo non odit placeat quibusdam reiciendis
          repudiandae, tempora ullam velit, voluptas voluptates! A aliquid at aut, beatae delectus eligendi explicabo id
          iusto mollitia porro quae quisquam quo reiciendis sapiente voluptates. Ab iusto labore magni repellat sint sit
          soluta sunt. Corporis culpa, cumque cupiditate deserunt dicta distinctio ducimus eius fuga harum id labore
          molestiae pariatur perferendis rem repudiandae sit tempore vel voluptatibus. Beatae dolor enim fugit nesciunt
          possimus quia rem sapiente similique tempora veniam. Ab architecto beatae delectus distinctio dolor earum,
          exercitationem illo inventore, nihil quo rem repellat repudiandae saepe, similique sunt. Ad alias amet,
          aperiam asperiores aspernatur commodi deserunt dignissimos doloribus ea eius eligendi error eveniet expedita
          explicabo facilis fuga id incidunt ipsum itaque iure magni minima minus molestiae officia perspiciatis
          possimus quas quia quibusdam quisquam ratione repellendus sed similique voluptatem? Accusantium, cum cumque
          doloremque earum enim, est maxime molestiae necessitatibus neque, officiis pariatur ratione unde veritatis?
          Aperiam distinctio eum, eveniet fugit illum in, laboriosam libero nemo non optio, possimus provident quas quo
          sed tempora veritatis vero voluptas. Aliquam aliquid aperiam asperiores beatae consequuntur cum cupiditate
          debitis delectus deleniti dolor doloribus, eos ex fugiat fugit illo illum ipsa labore laudantium magni maiores
          minus molestias mollitia nesciunt nobis non perspiciatis praesentium quas quasi quia quibusdam quidem quisquam
          quod sed sequi ullam vero voluptatum. Ab aliquid asperiores consectetur consequuntur, cupiditate eum ex
          expedita illo illum incidunt ipsam modi molestias nihil placeat provident quidem, quod recusandae sed
          similique tempore ullam voluptatibus voluptatum! Alias blanditiis, consequatur cum dolor eaque eligendi enim
          est eum eveniet fugiat hic illum minima nisi, nostrum, pariatur perspiciatis quaerat quibusdam quisquam
          ratione voluptatibus? Assumenda commodi fuga natus quis sequi! Aspernatur consequatur deserunt doloribus,
          facilis laboriosam quaerat recusandae veniam. Aperiam assumenda blanditiis doloremque est excepturi ipsum,
          libero maxime minima minus nihil omnis quas rem ullam unde voluptatem. Accusantium aut autem blanditiis
          delectus dolore doloremque eos eum ex ipsam iusto, maiores maxime natus nostrum odio officiis perferendis
          placeat reiciendis sapiente voluptas voluptate? Animi autem earum, error facilis fugit illo illum quidem
          tempore. Aliquam at autem, dignissimos ea eaque eum hic magni nulla, numquam optio, quidem quo sequi sit?
          Architecto dolorum laudantium nemo optio quaerat, quia tempore vitae? Accusantium aliquam, dolor dolores
          facilis illo nobis odit pariatur reiciendis veritatis voluptatibus. Dolorem enim fugit laudantium non
          perferendis quo ullam voluptatem. Asperiores culpa deserunt dolores, error eveniet inventore magnam minus
          nulla, obcaecati odio omnis provident quidem recusandae repellat rerum suscipit vel veritatis! Amet asperiores
          aut consequatur dignissimos fuga harum illo, iste iusto nesciunt nulla optio pariatur perferendis quam
          repellendus temporibus tenetur velit vero. Ex excepturi, labore natus nesciunt quos repellat reprehenderit
          sunt. Ab architecto consequatur debitis hic libero mollitia placeat possimus quisquam quos veritatis. In iusto
          neque porro veniam voluptatum. Animi aperiam architecto cupiditate dicta, dolorem doloribus eos esse eum ipsam
          ipsum laudantium natus nemo numquam omnis, quia sapiente sint sunt ut voluptate voluptatum. Ad, beatae
          doloremque dolores exercitationem illum laboriosam libero minima quisquam sapiente ullam velit veritatis
          voluptates? Beatae, officia.</p>
        <br/>
        <center>
          <Button onClick={ () => { this.goToTop(); }}>Go to top</Button>
          {/*<ScrollButton onClick={ () => { this.scrollToTop(); }}>Scroll to top</ScrollButton>*/}

        </center>

        <br/>
      </div>


    // scroll to top: https://codepen.io/Qbrid/pen/GjVvwL?editors=0010
    )
  }


}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    //<Hello name={'Name'}/>,
    <InputDisable/>,
    document.getElementById('app')
  );
});
