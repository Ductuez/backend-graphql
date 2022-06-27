export const convertStringToClassName = (str = "") =>
  str &&
  R.compose(
    R.trim(),
    R.replace(/ /g, "-"),
    R.replace(/ + /g, " "),
    R.replace(
      /!|@|%|\^|\*|\(|\)|\+|\\=|\\<|\\>|\?|\/|,|\.|\\:|\\;|\\'|\\"|\\&|\\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    ),
    R.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a"),
    R.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o"),
    R.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e"),
    R.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u"),
    R.replace(/ì|í|ị|ỉ|ĩ/g, "i"),
    R.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y"),
    R.replace(/đ/g, "d"),
    R.toLower()
  )(str);

export const convertStringToKey = (str = "") =>
  str &&
  R.compose(
    R.trim(),
    R.replace(/;/g, ""),
    R.replace(/ /g, "_"),
    R.replace(/ + /g, " "),
    R.replace(
      /!|@|%|\^|\*|\(|\)|\+|\\=|\\<|\\>|\?|\/|,|\.|\\:|\\;|\\'|\\"|\\&|\\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    ),
    R.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a"),
    R.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o"),
    R.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e"),
    R.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u"),
    R.replace(/ì|í|ị|ỉ|ĩ/g, "i"),
    R.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y"),
    R.replace(/đ/g, "d"),
    R.toLower()
  )(str);
export const shortNumber = (number, customUnit = ["tỷ", "triệu"]) => {
  return number && R.gt(number, 0) && R.gt(number.toString().length, 9)
    ? `${Math.round(Number(number) / 10000000) / 100} ${customUnit[0]}`
    : `${Math.round(Number(number) / 10000) / 100} ${customUnit[1]}`;
};

export const taoSoDangChuoi = ({ so = 0, donVi = "đ" }) => {
  return so > 0
    ? ReactDOMServer.renderToStaticMarkup(
        <NumberFormat
          displayType="text"
          thousandSeparator
          value={so}
          renderText={(giaTri) => (
            <>
              {giaTri}&nbsp;{donVi}
            </>
          )}
        />
      )
    : 0 + donVi;
};
