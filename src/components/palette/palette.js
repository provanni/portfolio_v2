import React from 'react';
import { CodeBlock } from 'react-code-blocks'
import './palette.css';


const Palette = () => (
  <div className='palette-container'>
    <div className='section-container'>
      <div className='intro-code-card'>
        <CodeBlock text='   public Developer(String name, String msg, String email){' language='Java' showLineNumbers={false}/>
        <CodeBlock text='       this.name = "Nicole";' language='Java' showLineNumbers={false}/>
        <CodeBlock text='       this.msg = "Hire me!"' language='Java' showLineNumbers={false}/>
        <CodeBlock text='       this.email = "nicole.provan@mail.utoronto.ca"' language='Java' showLineNumbers={false}/>
        <CodeBlock text='   } ' language='Java' showLineNumbers={false}/>
        <CodeBlock text=' ' language='Java' showLineNumbers={false}/>
       

      </div>
      <div className='palette'>
        <div className='box' id='one'>
          <div className='info'>#f0f8ff</div>
        </div>
        <div className='box' id='two'>
          <div className='info'>#bcb3fe</div>
        </div>
        <div className='box' id='three'>
          <div className='info'>#90ff8d</div>
        </div>
        <div className='box' id='four'>
          <div className='info'>#ff8dda</div>
        </div>
        <div className='box' id='five'>
          <div className='info'>#6bdee2</div>
        </div>
      </div>
    </div>
  </div>
);



export default Palette;
