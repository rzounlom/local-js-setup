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

import { toast } from "react-toastify";

export default function Counter() {
  const dispatch = useDispatch();

  const { value, incrementByValue } = useSelector((state) => state.counter);
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    dispatch(incrementByAmount(value));
  };

  const handleDecrement = () => {
    // console.log(
    //   value,
    //   incrementByValue,
    //   "value chech",
    //   value - incrementByValue < 0
    // );
    if (value - incrementByValue < 0) {
      return toast.warn(
        "Counter cannot go below 0! Please select another decrement amount",
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
    dispatch(decrement());
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
          onClick={handleDecrement}
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
