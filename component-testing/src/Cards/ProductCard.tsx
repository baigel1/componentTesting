
import { Result } from "@yext/answers-headless-react";
import get from "lodash/get";
import ReactMarkdown from "react-markdown";

export interface CardProps {
  /** The result data provided to the card for rendering. */
  result: Result;
}

export type FieldDataConstant = {
  mappingType: "CONSTANT";
  value: string;
};

export type FieldDataPath = {
  /** Indicates that the field data is mapped from the Result's raw data */
  mappingType: "FIELD";
  apiName: string | string[];
};

export type FieldData = FieldDataConstant | FieldDataPath;

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

function applyFieldDataPath(data: any, fieldMap: FieldDataPath): any {
  if (!Array.isArray(fieldMap.apiName)) {
    return get(data, fieldMap.apiName);
  }
  const apiNameWithData = fieldMap.apiName.find((apiName) =>
    get(data, apiName)
  );
  return apiNameWithData ? get(data, apiNameWithData) : undefined;
}

//map the fieldmappings to the results
export function applyFieldMappings(
  rawData: Record<string, unknown>,
  fieldMappings: Partial<Record<string, FieldData>>
): Record<string, any> {
  if (!fieldMappings) {
    return {};
  }

  return Object.entries(fieldMappings).reduce(
    (acc: Record<string, any>, [field, mapping]) => {
      if (!mapping) {
        return acc;
      }
      if (mapping.mappingType === "CONSTANT") {
        acc[field] = mapping.value;
      } else {
        acc[field] = applyFieldDataPath(rawData, mapping);
      }
      return acc;
    },
    {}
  );
}

const ProductCard = (props: ProductCardProps) => {
  const { fieldMappings, result } = props;
  //console.log("lets seeeee: ", result.rawData.photoGallery)
  //const imageSource = result.rawData.?photoGallery[0].?image.?url

  const mappedData = applyFieldMappings(result.rawData, fieldMappings);

  const markdown = mappedData.description
  return (
    <div className="flex flex-col border-solid border-2 border-slate-500 rounded-t-lg mt-6  max-w-xs mb-8">
      {mappedData.photoGallery[0] ? (
        <img className="rounded-t-lg max-h-32" src={mappedData.photoGallery[0].image.url} />
      ) : null}
      <div className="p-2.5">
        <h2 className="font-bold text-lg">{mappedData.title}</h2>
        <p>${mappedData.price.value}</p>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProductCard;
