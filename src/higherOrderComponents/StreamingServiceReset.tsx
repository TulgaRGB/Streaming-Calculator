import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  additionalStreamingServicesExpanded,
  itemWithId,
} from "../../atoms/atom";
import { useState } from "react";

interface Props {
  name: string;
  children: React.ReactNode;
}

export function StreamingServiceReset({ name, children }: Props) {
  const [state, setState] = useState(false);
  const [counter, setCount] = useRecoilState(itemWithId(name));
  const isExpanded = useRecoilValue(additionalStreamingServicesExpanded);

  React.useEffect(() => {
    if (!isExpanded.isExpanded) {
      setCount({
        name: counter.name,
        rate: counter.rate,
        count: 0,
      });
      setState(!state);
    }
  }, [isExpanded.isExpanded]);

  return <>{children}</>;
}
