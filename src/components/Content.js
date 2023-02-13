import "../App.css";
 
function Content()
{
return(<>
<div className="content-body">
<div id="about" className="info">
  <h2 align="left">ABOUT ME</h2>
  <p clasName="abt">
    Hi There, myself shabarish k .I am an computer science engineering
     student at kvg college of engineering sullia.Currently I am at my 5<sup>th</sup>sem  of my academics,expected to  graduate in 2024 from Visvesvaraya Technological University <br/>
     Over the past few months I have been able to aquire some skills on technologies and languages like java,html,css,python,c++,javascript,sql etc..
recently I have been enthusiastic about backend technology and  currently exploring node js ,react etc...
  </p>
   </div>
   <div id="skill" className="info">
     <h2 align="right">SKILLS</h2>
     <p className="skl">
      <li>JAVA -advance</li>
      <li>C++ -intermediate</li>
      <li>JAVASCRIPT -intermediate</li>
      <li>PYTHON -intermediate</li>
      <li>HTML -advance</li>
      <li>LINUX -intermediate</li>
      <li>CSS -intermediate</li>
      <li>SQL -intermediate</li>
       <li>GIT-intermediate </li>
       <li>REACT JS -beginner </li>
       <li>NODE JS -beginner </li>

     </p>
      </div>
      <div id="education" className="info">
        <h2 align="left">EDUCATION</h2>
        <dl className="edu">
    <dt>High School </dt>
    <dd>M.S.C.H.S.S Perdala Nirchal</dd>

    <dt>Higher Secondary</dt>
    <dd>N.H.S.S Perdala</dd>

    <dt>B Tech</dt>
    <dd>K.V.G Collge Cf Engineering  Sullia</dd>
</dl>
        
      </div>
</div>
</>)

}
export default Content;