import "./Counter.scss";

import { Button, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { createOptions, incrementOptions } from "../../data/options";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();

  const { value, incrementByValue } = useSelector((state) => state.counter);
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    dispatch(incrementByAmount(value));
  };

  // console.log("VALUE: ", value);
  // console.log("incrementByValue: ", incrementByValue);

  const options = createOptions(10);
  // console.table(options);
  // console.table(incrementOptions);

  return (
    <div className="counter">
      <div className="counter-value">{value}</div>
      <div className="counter-actions">
        <Button
          type="default"
          icon={<PlusOutlined />}
          size="large"
          ghost
          block
          onClick={() => dispatch(increment())}
        >
          Add
        </Button>
        <Button
          type="default"
          icon={<MinusCircleOutlined />}
          size="large"
          ghost
          block
          disabled={value === 0}
          onClick={() => dispatch(decrement())}
        >
          Subtract
        </Button>
        <Select
          defaultValue={incrementByValue}
          style={{
            width: "80%",
          }}
          size="large"
          onChange={handleChange}
          options={options}
        />
      </div>
    </div>
  );
}
