import { CardProps, ThumbsFeedback} from "@yext/answers-react-components";
import ReactMarkdown from "react-markdown";
import { FieldData, applyFieldMappings } from "../utils";

// export interface CardProps {
//   /** The result data provided to the card for rendering. */
//   result: Result;
// }



export interface ProductCardProps extends CardProps {
  /** Custom mappings for the data fields used in the card. */
  fieldMappings: {
    title?: FieldData;
    description?: FieldData;
    cta1?: FieldData;
    cta2?: FieldData;
    photoGallery?: FieldData;
    price?: FieldData;
  };
}

const ProductCard = (props: ProductCardProps) => {
  const { fieldMappings, result } = props;
  //console.log("lets seeeee: ", result.rawData.photoGallery)
  //const imageSource = result.rawData.?photoGallery[0].?image.?url

  const mappedData = applyFieldMappings(result.rawData, fieldMappings);

  const markdown = mappedData.description

  const handleThumbsClick = () => {
    console.log("thumbbing!")
  }

  return (
    <div className="flex flex-col border-solid border-2 border-slate-500 rounded-t-lg mt-6  max-w-xs mb-8">
      {mappedData.photoGallery[0] ? (
        <img className="rounded-t-lg max-h-32" src={mappedData.photoGallery[0].image.url} alt="fruit pic"/>
      ) : null}
      <div className="p-2.5">
        <h2 className="font-bold text-lg">{mappedData.title}</h2>
        <p>${mappedData.price.value}</p>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <ThumbsFeedback cssClasses={{thumbsDownIcon: "bg-green-500 w-8 h-8 rotate-180", thumbsUpIcon: "bg-blue-500 w-8 h-8"}} onClick={handleThumbsClick} feedbackText="was this result helpful?"/>
    </div>
  );
};

export default ProductCard;
