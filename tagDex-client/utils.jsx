import { Tag } from 'antd';

export function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// TODO: fetch tags from server and change random pull ceiling in animation to tags.length - 1
export const options = [
  { label: 'tatooine', value: 'tatooine', _id: 'ersjber' },
  { label: 'kashyyyk', value: 'kashyyyk', _id: '234wreu89i' },
  { label: 'dagobah', value: 'dagobah', _id: 'wegrd' },
  { label: 'mustafar', value: 'mustafar', _id: '56ryhg' },
  { label: 'coruscant', value: 'coruscant', _id: 'fvrted' },
  { label: 'naboo', value: 'naboo', _id: 't678gy' },
  { label: 'bith', value: 'bith', _id: '2534twr' },
  { label: 'wookiee', value: 'wookiee', _id: 'erergdf' },
  { label: 'gungan', value: 'gungan', _id: '2tw4rge' },
  { label: 'womprat', value: 'womprat', _id: '524twrg' },
  { label: 'wampa', value: 'wampa', _id: 'i68kut' },
  { label: 'rancor', value: 'rancor', _id: '756rtfgyuv' },
  { label: 'sarlacc', value: 'sarlacc', _id: '235rwteg' },
  { label: 'jedi', value: 'jedi', _id: 'ersjwergdfb' },
  { label: 'sith', value: 'sith', _id: '23dfbeu89i' },
  { label: 'droid', value: 'droid', _id: 'ewrgs' },
  { label: 'astromech', value: 'astromech', _id: '2r4wef0y8h' },
  { label: 'blaster', value: 'blaster', _id: '2t34wge' },
  { label: 'x-wing', value: 'x-wing', _id: '2ty34erg' },
  { label: 'a-wing', value: 'a-wing', _id: 'qw3rafegs' },
  { label: 'y-wing', value: 'y-wing', _id: 'e64drct' },
  { label: 't-16', value: 't-16', _id: '8u9ioyh' },
  { label: 'Battle droid', value: 'battle droid', _id: 'euyfrg7' },
];

export const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color="#389e0d"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};
