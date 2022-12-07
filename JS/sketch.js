let Hslider, Vslider, RdShape, CpShape1, CpShape2 ;

function setup()
{
  createCanvas(400, 400);
  Hslider = createSlider(1 , 9, 8)
  Hslider.position(1210, 325)
  Hslider.style('width', '160px')
 
 
  Vslider = createSlider(1 , 9, 8)
  Vslider.position(1210, 450)
  Vslider.style('width', '160px')
 
  RdShape = createRadio();
  RdShape.option("Rect")
  RdShape.option("RoundRect")
  RdShape.option("Circle")
  RdShape.option("Triangle")
  RdShape.option("Quad")
  RdShape.selected("Rect")
  RdShape.position(1210, 575)
 
  CpShape1 = createColorPicker('#ed225d')
  CpShape1.position(1210, 525)
  CpShape1.style("height", "25px")
 
  CpShape2 = createColorPicker('green')
  CpShape2.position(1270, 525)
  CpShape2.style("height", "25px")
 
}

function draw()
{
  background(220);

  for(m=0 ; m < Vslider.value() ; m++)
    {
      for (i=0; i < Hslider.value() ; i++)
        {
          if(i%2==1 && m%2==1 )
            {
              fill(CpShape1.color())
            }
          else if(i%2==0 && m%2==0 )
            {
              fill(CpShape1.color())
            }
          else
            {
              fill(CpShape2.color())
            }
          
          if (RdShape.value() == "Rect")
            {
              rect( 60*i+20, 60*m, 50 , 50 )
            }
          else if (RdShape.value() == "RoundRect")
            {
              rect( 60*i+20, 60*m, 50 , 50 , 10 )
            }
          else if (RdShape.value() == "Circle")
            {
              circle ( 60*i+20, 60*m, 50 )
            }    
          else if (RdShape.value() == "Triangle")
          {
            triangle (30+i*70, 75+m*70, 58+i*70, 20+m*70, 86+i*70, 75+m*70)
          }
          else if (RdShape.value() == "Quad")
          {
            quad (38+i*70, 31+m*70, 86+i*70, 20+m*70, 69+i*70, 63+m*70,                 30+i*70, 76+m*70)
        }
        }
    }
}